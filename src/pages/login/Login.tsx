import React, {useState } from "react";
import 'aos/dist/aos.css'
import { RiLoginCircleLine, RiLockPasswordFill } from 'react-icons/ri'
import { BiUserCircle } from 'react-icons/bi'
import { AuthContext } from "../../providers/auth";
import { FormLogin } from "./style";
import { WarningFieldLogin } from "../login/style";


export const Login = (props: any) => {
    const { user} = React.useContext(AuthContext);
    const [incorretPass, setincorretPass] = useState(false)
    const [name, setName] = useState(user.name || '')
    const [pass, setPass] = useState(user.pass || '')
    const cond = (name.length > 3 && pass.length > 5)

    const saveUser = (name: any, pass: any) => {
        const { history: { push } } = props
        if (name === user.name && pass === user.pass) {
            push('/store')
        } else if (name !== user.name || pass !== user.pass) {
            setincorretPass(true)
        }
    }

    return (
        <>
            <FormLogin>
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BetQecEPZPH1770yc9Wtm2_yr90fGe1S0JkPrDXLnA&s"alt="Image Profile" />
                </div>
                
                <div>
                    <label>
                        <BiUserCircle style={{ marginRight: "8px", color: 'white' }} />
                        User
                    </label>
                    <input
                        type="text"
                        onChange={({ target: { value } }) => setName(value)}
                        value={name}
                    />
                </div>
                <div>
                    <label>
                        <RiLockPasswordFill style={{ marginRight: "8px", color: 'white' }}/>
                        Password
                    </label>
                    <input
                        type={"password"}
                        onChange={({ target: { value } }) => setPass(value)}
                        value={pass}
                    />

                </div>
                {
                    incorretPass && <WarningFieldLogin>User or Password Incorrect</WarningFieldLogin>
                }
                <button
                    onClick={() => saveUser(name, pass)}
                    type="button"
                    disabled={!cond}
                    
                >
                    <RiLoginCircleLine style={{ marginRight: "5px",}} />
                    Sing In
                </button>
            </FormLogin>
        </>
    )
}