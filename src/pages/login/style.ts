import styled from "styled-components";

export const FormLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: fit-content;
margin: auto;
gap: 40px;
background-color: #372A75;
padding: 25px;
margin-top: 160px;
border-radius: 10px;

div{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0rem 5rem 0rem 5rem;
}

img{
    width: 10rem;
    height: 10rem;
    border-radius: 999px;
}


label {
    color: aqua;
    font-size: 32px;
}

input{
    font-size: 32px;
    padding: 10px;
    border: inherit;
    border-radius: 10px;

    &:hover{
        background-color: azure;
    }
    :focus{
        background-color: #904DFC;
        color: white;
    }
}

button{
    display: flex;
    align-items: center;
    font-size: 30px;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 10px;
    border: inherit;
    margin-top: 20px;
    color: white;
    background-color: rgb(75, 54, 209);

    &:hover{
        transform: scale(1.1);
        transition: 0.8s;
        background-color: #7260c9;

    }
}
`
export const ButtonRemove = styled.button`
:hover{
    color: red;
}
`
export const WarningFieldLogin = styled.div`
background-color: white;
font-weight: 600;
font-size: 20px;
padding: 10px;
border-radius: 10px;
color: red;
`