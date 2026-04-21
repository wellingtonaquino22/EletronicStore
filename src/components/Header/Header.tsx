import { Link, useHistory } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { AuthContext } from '../../providers/auth'
import React from 'react'
import { HeaderArea } from './style'

export const Header = () => {
  const { cartItemContext, user, logout } = React.useContext<any>(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  const initial = user.name ? user.name.charAt(0).toUpperCase() : '?';

  return (
    <HeaderArea>
      <Link to="/store" className="logo">EletronicStore</Link>

      <nav>
        <Link to="/store">Loja</Link>
        <Link to="/cart">Carrinho</Link>
        <Link to="/profile">Perfil</Link>
      </nav>

      <div className="right-area">
        <Link to="/cart" className="cart-btn">
          <AiOutlineShoppingCart size={18} />
          Carrinho
          <span>{cartItemContext}</span>
        </Link>
        <Link to="/profile" className="initial-avatar">
          {initial}
        </Link>
        <button className="logout-btn" onClick={handleLogout} title="Sair">
          <RiLogoutBoxLine size={18} />
        </button>
      </div>
    </HeaderArea>
  )
}
