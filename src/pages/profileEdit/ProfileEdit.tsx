import React, { useState } from "react";
import { AuthContext } from "../../providers/auth";
import { ProfileEditPage, ProfileEditCard } from "./style";

export const ProfileEdit = (props: any) => {
  const { user, setUser } = React.useContext(AuthContext);
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [cpf, setCpf] = useState(user.cpf || '');
  const [saldo, setSaldo] = useState(user.saldo || '');

  const cond = (
    name.length > 3 && (email.includes('@') && email.length > 8)
    && cpf.length === 12 && Number(saldo) > 0
  )

  const saveChanges = () => {
    setUser({ ...user, name, email, cpf, saldo: Number(saldo) })
    const { history: { push } } = props
    push('/profile')
  }

  return (
    <ProfileEditPage>
      <ProfileEditCard>
        <h2 className="card-title">Editar Perfil</h2>
        <div className="fields-grid">
          <div className="form-group">
            <label>Nome</label>
            <input type="text" value={name} onChange={({ target: { value } }) => setName(value)} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={({ target: { value } }) => setEmail(value)} />
          </div>
          <div className="form-group">
            <label>CPF (12 dígitos)</label>
            <input type="number" value={cpf} onChange={({ target: { value } }) => setCpf(value)} />
          </div>
          <div className="form-group">
            <label>Saldo</label>
            <input type="number" step="any" value={saldo} onChange={({ target: { value } }) => setSaldo(value)} />
          </div>
        </div>
        <button disabled={!cond} onClick={saveChanges}>Salvar alterações</button>
      </ProfileEditCard>
    </ProfileEditPage>
  )
}
