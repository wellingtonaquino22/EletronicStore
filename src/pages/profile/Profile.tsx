import React from "react";
import { AuthContext } from "../../providers/auth";
import { ProfileFields } from "./style";

export const Profile =(props: any)=>{
    const { user,} = React.useContext(AuthContext);
    
    const toProfileEdit = ()=>{
        const {history: {push}} = props;
        push('/profile/edit')
    }
    

    return(
        <ProfileFields data-aos="zoom-out-up">
            <h1 style={{color: 'white'}}>Profile</h1>
            <img src={user.image || ''} alt="img-user" />
            <p> <span>NOME: </span>{`${user.name || '' }`}</p>
            <p><span>EMAIL: </span>{`${user.email || ''}`}</p>
            <p><span>CPF: </span>{`${user.cpf || ''}`}</p>
            <p><span>SALDO:</span>{`${user.saldo.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}`}</p>
            <button
            onClick={toProfileEdit}
            >
                Edit Profile
            </button>
        </ProfileFields>
    )
}