import styled from "styled-components"

export const ProfileFields = styled.div`
background-color: rgb(55, 42, 117);
width: 35%;
display: flex;
flex-direction: column;
padding: 40px;
font-size: 20px;
margin: auto;
margin-top: 100px;
border-radius: 20px;

span{
    color: blueviolet;
}

p{
    padding: 10px;
    background-color: white;
    font-size: 30px;
    color: black;
    border-radius: 10px;
}

img{
    border-radius: 50%;
    width: 60%;
    height: 60%;
    justify-self: center;
    align-self: center;
}

button{
    background-color: rgb(75, 54, 209);
    font-size: 35px;
    padding: 10px;
    border-radius: 10px;
    border: inherit;
    color: white;
    margin-top: 20px;
    justify-self: center;
    align-self: center;

    &:hover{
        transform: scale(1.1);
        transition: 0.8s;
        background-color: rgb(35, 0, 255);

    }
}

`