import { getItem, setItem } from '../../services/LocalStorage';
import { BsFillCartDashFill } from 'react-icons/bs';
import { ProductsArea } from '../../css/styled';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { AuthContext } from '../../providers/auth';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductsCart, ButtonCart, WarningFieldCart } from './style';
import { ButtonRemove } from '../login/style';
import { TitleStore } from '../store/style';

export const Cart = (props: any) => {
    const [data, setData] = useState(getItem('carrinhostore') || [])
    const error = () => toast.error('Removido do Cart!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

    })

    const { user, setUser } = React.useContext(AuthContext);
    const { cartItemContext, setCartItemContext } = React.useContext(AuthContext);

    const removeItem = (obj: any) => {
        const arrayFilter = data.filter((e: any) => e.id != obj.id)
        setData(arrayFilter)
        setItem('carrinhostore', arrayFilter)
        setCartItemContext(arrayFilter.length)
        error()

    }

    const handleClick = () => {
        const { history: { push } } = props
        push(`/payment/${subtotal}`)
    }
    const handleClickreturn = () => {
        const { history: { push } } = props
        push(`/store`)
    }

    const subtotal = data.reduce((acc: number, cur: any) => acc + cur.price, 0)

    return (
        <>
            {data.length >= 1 ? (
                <>
                    <ProductsCart>
                        <div>
                            <TitleStore>Cart</TitleStore>
                        </div>
                        <div>
                            <h3>
                                Saldo:
                                <span>
                                    {`${user.saldo.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}`}
                                </span>
                            </h3>
                            <h3>
                                Valor a Pagar:
                                <span>
                                    {`${subtotal.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}`}
                                </span>
                            </h3>
                        </div>
                        <div>
                            <ButtonCart disabled={subtotal <= 0} onClick={handleClick}>
                                Pagar <AiOutlineShoppingCart />
                            </ButtonCart>
                        </div>
                    </ProductsCart>
                    <ProductsArea>
                        {data.map((e: any) => (
                            <div key={e.id}>
                                <h3>{e.title}</h3>
                                <img src={e.thumbnail} alt={e.title} />
                                <h4>
                                    {e.price.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })}
                                </h4>
                                <ButtonRemove onClick={() => removeItem(e)}>
                                    <BsFillCartDashFill />
                                </ButtonRemove>
                            </div>
                        ))}
                    </ProductsArea>
                </>
            ) : (
                <WarningFieldCart>
                    <div>
                        <p>
                            Carrinho vazio 🙁
                        </p>
                    </div>
                    <div>
                        <button onClick={handleClickreturn}>
                            Voltar
                        </button>
                    </div>
                </WarningFieldCart>
            )}
        </>
    );
}