import React, { useEffect, useState } from "react";
import { setItem } from "../../services/LocalStorage";
import { AiFillCheckCircle } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { Loading } from "../../components/loading/Loading";
import { AuthContext } from "../../providers/auth";
import { InsufficientFunds, PaymentArea } from "./style";

export const Payment = (props: any) => {
  const [loading, setLoading] = useState(true);
  const [newsaldo, setNewSaldo] = useState(false);
  const { params: { price }, } = props.match;
  const { setCartItemContext } = React.useContext(AuthContext);
  const { user, setUser } = React.useContext(AuthContext);

  useEffect(() => {

    if (parseFloat(user.saldo) >= parseFloat(price)) {
      const newSaldo = parseFloat(user.saldo) - parseFloat(price);
      setUser({ ...user, saldo: newSaldo });
      setItem("carrinhostore", []);
      setItem("usuario", { ...user, saldo: newSaldo });
      setCartItemContext(0)
    } else {
      setNewSaldo(true);
    }
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : newsaldo ? (
        <InsufficientFunds>
          <div>
            <span>
              <ImCancelCircle />
            </span>
            <h2>Saldo Insuficiente</h2>
          </div>
        </InsufficientFunds>
      ) : (
        <PaymentArea>
          <div>
            <h2>Sua compra foi concluida com sucesso</h2>
            
            <span>
              <AiFillCheckCircle />
            </span>

            <span>
              Preço:&nbsp;
              <p>{` R$ ${Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(price)}`}</p>
            </span>

            <span>
              Saldo:&nbsp; 
            <p>{`R$ ${Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(user.saldo)}`}</p>
            </span>

            <span>
              Comprador:&nbsp;
              <p>{` ${user.name}`}</p>
            </span>

            <span>
              Prazo:&nbsp;
              <p>{` ${Math.ceil(Math.random() * 20) + 1} dias`}</p>
            </span>

          </div>
        </PaymentArea>
      )}
    </>
  );
};
