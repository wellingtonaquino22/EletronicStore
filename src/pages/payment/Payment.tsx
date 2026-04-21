import React, { useState } from "react";
import { setItem } from "../../services/LocalStorage";
import { AiFillCheckCircle } from "react-icons/ai";
import { Loading } from "../../components/loading/Loading";
import { AuthContext } from "../../providers/auth";
import {
  PaymentPage, CheckoutCard, CardElementWrapper, TestCardHint,
  SuccessCard
} from "./style";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { RouteComponentProps } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || "");

const CARD_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#f1f5f9",
      fontFamily: "'Inter', sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": { color: "#475569" },
      iconColor: "#10b981",
    },
    invalid: {
      color: "#f87171",
      iconColor: "#f87171",
    },
  },
};

interface CheckoutFormProps {
  price: string;
  onSuccess: () => void;
}

const CheckoutForm = ({ price, onSuccess }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setErrorMsg("");

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setErrorMsg(error.message || "Cartão inválido.");
      setProcessing(false);
    } else if (paymentMethod) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="amount-row">
        <span>Total a pagar</span>
        <span className="amount">
          {parseFloat(price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </span>
      </div>

      <div className="divider" />

      <div className="field-group">
        <label>Dados do cartão</label>
        <CardElementWrapper>
          <CardElement options={CARD_OPTIONS} />
        </CardElementWrapper>
      </div>

      {errorMsg && <div className="error-msg">{errorMsg}</div>}

      <TestCardHint>
        🧪 Teste: use <code>4242 4242 4242 4242</code>, data futura, qualquer CVC e CEP
      </TestCardHint>

      <button type="submit" disabled={!stripe || processing} className="pay-btn">
        {processing ? "Processando..." : `Pagar ${parseFloat(price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`}
      </button>
    </form>
  );
};

export const Payment = (props: RouteComponentProps<{ price: string }>) => {
  const [loading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { params: { price } } = props.match;
  const { setCartItemContext, user } = React.useContext(AuthContext);

  const handleSuccess = () => {
    setItem("carrinhostore", []);
    setCartItemContext(0);
    setSuccess(true);
  };

  if (loading) return <Loading />;

  if (success) return (
    <PaymentPage>
      <SuccessCard>
        <div className="icon-circle"><AiFillCheckCircle /></div>
        <h2>Compra concluída!</h2>
        <div className="info-rows">
          <div className="info-row">
            <span className="row-label">Valor pago</span>
            <span className="row-value green">
              {Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(parseFloat(price))}
            </span>
          </div>
          <div className="info-row">
            <span className="row-label">Comprador</span>
            <span className="row-value">{user.name}</span>
          </div>
          <div className="info-row">
            <span className="row-label">Prazo de entrega</span>
            <span className="row-value">{Math.ceil(Math.random() * 20) + 1} dias úteis</span>
          </div>
        </div>
      </SuccessCard>
    </PaymentPage>
  );

  return (
    <PaymentPage>
      <CheckoutCard>
        <div className="card-header">
          <span className="section-label">Pagamento seguro</span>
          <h2>Finalizar compra</h2>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price} onSuccess={handleSuccess} />
        </Elements>
      </CheckoutCard>
    </PaymentPage>
  );
};
