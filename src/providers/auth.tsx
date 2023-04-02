import React, { useState } from "react";

export const AuthContext = React.createContext<any>(0);

export const AuthProvider = (props: any) => {
    const [cartItemContext, setCartItemContext] = useState(0)
    const [idCategory, setIdCategory] = useState('celular')
    const [user, setUser] = useState({
        name: "wellington",
        pass: "123456789",
        email: "wel@gmail.com",
        cpf: "123456789101",
        saldo: 5000,
        image: "https://avatars.githubusercontent.com/u/82858995?v=4",
    })

    return (
        <AuthContext.Provider
            value={{
                cartItemContext, setCartItemContext,
                idCategory, setIdCategory,
                user,setUser
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}