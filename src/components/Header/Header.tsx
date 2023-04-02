import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AuthContext } from '../../providers/auth'
import React from 'react'
import { HeaderArea } from './style'

export const Header = () => {

    const { cartItemContext } = React.useContext<any>(AuthContext);
    const { user} = React.useContext(AuthContext);

    return (
        <HeaderArea>
            <div>
                <Link to="/store">Store</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/profile">My Profile</Link>
            </div>

                <div>
                    <AiOutlineShoppingCart style={{fontSize: '40px'}}/>
                    <span>
                        {cartItemContext}
                    </span>
                    <Link to="/profile">
                    <img src={user.image} alt="" />
                    </Link>
                </div>
        </HeaderArea>
    )
}