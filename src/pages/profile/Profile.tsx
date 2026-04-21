import React from "react";
import { AuthContext } from "../../providers/auth";
import { ProfilePage, ProfileCard } from "./style";

export const Profile = (props: any) => {
  const { user } = React.useContext(AuthContext);

  const toProfileEdit = () => {
    const { history: { push } } = props;
    push('/profile/edit')
  }

  const initial = user.name ? user.name.charAt(0).toUpperCase() : '?';

  return (
    <ProfilePage>
      <ProfileCard>
        <div className="profile-header">
          <div className="profile-avatar">{initial}</div>
          <div className="user-info">
            <h1>{user.name}</h1>
            <span className="user-email">{user.email}</span>
          </div>
        </div>

        <div className="profile-fields">
          <div className="field">
            <span className="field-label">Nome</span>
            <span className="field-value">{user.name}</span>
          </div>
          <div className="field">
            <span className="field-label">Email</span>
            <span className="field-value">{user.email}</span>
          </div>
          <div className="field">
            <span className="field-label">CPF</span>
            <span className="field-value">{user.cpf}</span>
          </div>
        </div>

        <button onClick={toProfileEdit}>Editar Perfil</button>
      </ProfileCard>
    </ProfilePage>
  )
}
