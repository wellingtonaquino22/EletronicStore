import React, { useEffect, useState } from "react";
import { AuthContext } from "../../providers/auth";
import { ProfileEditFields } from "./style";

export const ProfileEdit = (props: any) => {
    const { user, setUser } = React.useContext(AuthContext);
    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email || '');
    const [pass, setPass] = useState(user.pass || '');
    const [image, setImage] = useState(user.image || '');
    const [cpf, setCpf] = useState(user.cpf || '');
    const [saldo, setSaldo] = useState(user.saldo || '');

    useEffect(()=>{
    },[user.saldo])

    const cond = (
        name.length > 3 && (email.includes('@') && email.length > 8)
        && pass.length > 0 && image.length > 4 && cpf.length === 12
        && saldo > 2
    )

    const saveChanges = () => {
        setUser({ name, email, pass, image, cpf, saldo })
        const { history: { push } } = props
        push('/profile')
    }


    return (
        <ProfileEditFields>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={({ target: { value } }) => setName(value)}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={({ target: { value } }) => setEmail(value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={pass}
                    onChange={({ target: { value } }) => setPass(value)}
                />
            </div>
            <div>
                <label>Image</label>
                <input
                    type="text"
                    value={image}
                    onChange={({ target: { value } }) => setImage(value)}
                />
            </div>
            <div>
                <label>Cpf</label>
                <input
                    type="number"
                    value={cpf}
                    onChange={({ target: { value } }) => setCpf(value)}
                />
            </div>
            <div>
                <label>Saldo</label>
                <input
                    type="number"
                    step= "any"
                    value={saldo}
                    onChange={({target: {value}})=> setSaldo(value) }
                />
            </div>
            <button
                disabled={!cond}
                onClick={saveChanges}
            >
                Save
            </button>

        </ProfileEditFields>
    )
}