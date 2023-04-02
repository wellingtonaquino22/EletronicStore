import styled from "styled-components"

export const ProfileEditFields = styled.div`
background-color: rgb(55, 42, 117);
border-radius: 20px;
width: 50%;
padding-top: 50px;
padding-bottom: 50px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin: 100px 450px;
gap: 40px;


div{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}
label{
    width: 50%;
    color: blueviolet;
    font-size: 30px;
    border-radius: 10px;
}
input{
    font-family: monteserrat;
    font-size: 30px;
    padding: 8px;
    border: 1px solid rgb(194,193,193);
    border-radius: 10px;

    &:hover{
        background-color: azure;
    }
    :focus{
        background-color: rgb(203, 162, 245);
    }
}
button{
    background-color: rgb(75, 54, 209);
    font-size: 35px;
    padding: 10px;
    border-radius: 10px;
    border: inherit;
    color: white;
    margin-top: 20px;

    &:hover{
        transform: scale(1.1);
        transition: 0.8s;
        background-color: rgb(35, 0, 255);

    }
}
`