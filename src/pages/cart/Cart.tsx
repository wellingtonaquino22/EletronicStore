import { getItem, setItem } from '../../services/LocalStorage';
import { BsFillCartDashFill } from 'react-icons/bs';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { AuthContext } from '../../providers/auth';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartPage, CartHeader, CartLayout, CartItems, CartItem, CartSummary, ButtonCart, EmptyCart } from './style';

export const Cart = () => {
  const [data, setData] = useState(getItem('carrinhostore') || [])
  const { setCartItemContext } = React.useContext(AuthContext);
  const history = useHistory();

  const toastError = () => toast.error('Removido do carrinho!', {
    position: "top-right", autoClose: 1000, theme: "dark",
  })

  const removeItem = (obj: any) => {
    const arrayFilter = data.filter((e: any) => e.id != obj.id)
    setData(arrayFilter)
    setItem('carrinhostore', arrayFilter)
    setCartItemContext(arrayFilter.length)
    toastError()
  }

  const handleClick = () => {
    history.push(`/payment/${subtotal}`)
  }

  const handleClickreturn = () => {
    history.push('/store')
  }

  const subtotal = data.reduce((acc: number, cur: any) => acc + cur.price, 0)

  return (
    <CartPage>
      {data.length >= 1 ? (
        <>
          <CartHeader>
            <div>
              <span className="label">Resumo</span>
              <h1>Seu Carrinho</h1>
            </div>
            <span className="count">
              {data.length} {data.length === 1 ? 'item' : 'itens'}
            </span>
          </CartHeader>

          <CartLayout>
            <CartItems>
              {data.map((e: any) => (
                <CartItem key={e.id}>
                  <img src={e.thumbnail} alt={e.title} />
                  <div className="item-info">
                    <span className="category">{e.category}</span>
                    <h3>{e.title}</h3>
                    <span className="price">
                      {e.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </span>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(e)} title="Remover">
                    <BsFillCartDashFill />
                  </button>
                </CartItem>
              ))}
            </CartItems>

            <CartSummary>
              <h2>Resumo do pedido</h2>
              <div className="row">
                <span>{data.length} {data.length === 1 ? 'item' : 'itens'}</span>
                <span>{subtotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
              </div>
              <div className="divider" />
              <div className="row total">
                <span>Total</span>
                <span className="green">
                  {subtotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </span>
              </div>
              <ButtonCart
                disabled={subtotal <= 0}
                onClick={handleClick}
              >
                Finalizar compra <AiOutlineShoppingCart />
              </ButtonCart>
              <button className="back-btn" onClick={handleClickreturn}>
                Continuar comprando
              </button>
            </CartSummary>
          </CartLayout>
        </>
      ) : (
        <EmptyCart>
          <div className="icon">🛒</div>
          <h2>Carrinho vazio</h2>
          <p>Adicione produtos para continuar</p>
          <button onClick={handleClickreturn}>Ver produtos</button>
        </EmptyCart>
      )}
    </CartPage>
  );
}
