import React, { useState } from "react";

export const AuthContext = React.createContext<any>(0);

export const AuthProvider = (props: any) => {
    const [cartItemContext, setCartItemContext] = useState(0)
    const [idCategory, setIdCategory] = useState('smartphones')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({
        name: "",
        email: "",
        cpf: "123456789101",
        saldo: 5000,
    })

    const logout = () => {
        setIsLoggedIn(false);
        setUser({ name: "", email: "", cpf: "123456789101", saldo: 5000 });
        setCartItemContext(0);
    }

    return (
        <AuthContext.Provider
            value={{
                cartItemContext, setCartItemContext,
                idCategory, setIdCategory,
                user, setUser,
                isLoggedIn, setIsLoggedIn,
                logout,
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}
