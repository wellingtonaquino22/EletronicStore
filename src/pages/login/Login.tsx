import React, { useState } from "react";
import { RiLoginCircleLine, RiLockPasswordFill } from 'react-icons/ri'
import { BiUserCircle } from 'react-icons/bi'
import { AuthContext } from "../../providers/auth";
import { LoginPage, FormLogin, WarningFieldLogin } from "./style";

export const Login = (props: any) => {
  const { setIsLoggedIn, setUser, user } = React.useContext(AuthContext);
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const cond = (name.length > 3 && pass.length > 5)

  const saveUser = () => {
    const { history: { push } } = props
    setUser({ ...user, name, email: `${name.toLowerCase().replace(/\s+/g, '')}@mail.com` });
    setIsLoggedIn(true);
    push('/store')
  }

  return (
    <LoginPage>
      <FormLogin>
        <div className="brand">
          <span className="brand-icon">⚡</span>
          <span className="brand-name">EletronicStore</span>
        </div>

        <div className="form-header">
          <h1>Bem-vindo de volta</h1>
          <p>Entre com qualquer usuário e senha para continuar</p>
        </div>

        <div className="form-group">
          <label><BiUserCircle /> Usuário</label>
          <input
            type="text"
            placeholder="Seu nome de usuário"
            onChange={({ target: { value } }) => setName(value)}
            value={name}
          />
        </div>

        <div className="form-group">
          <label><RiLockPasswordFill /> Senha</label>
          <input
            type="password"
            placeholder="Sua senha"
            onChange={({ target: { value } }) => setPass(value)}
            value={pass}
          />
        </div>

        {!cond && name.length > 0 && (
          <WarningFieldLogin>Usuário deve ter mais de 3 caracteres e senha mais de 5</WarningFieldLogin>
        )}

        <button
          onClick={saveUser}
          type="button"
          disabled={!cond}
        >
          <RiLoginCircleLine /> Entrar
        </button>
      </FormLogin>
    </LoginPage>
  )
}
