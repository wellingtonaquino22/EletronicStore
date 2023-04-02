import styled from "styled-components"

export const InsufficientFunds = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
min-height: 87vh;
background-color: black;
height: 100vh;
span{
    color: red;
    font-size: 80px;
}
h2{
    color: white;
}
`
export const PaymentArea = styled.div`
display: flex;
flex-direction: column;
height: 87vh;
background-color: #60AA45;
align-items: center;
justify-content: center;


div{
    background-color: white;
    padding: 30px 30px 80px 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 25px;
    
    span:nth-child(2){
        color:green;
        font-size: 70px;
    }

    span{
        display: flex;
        color: green;
        justify-content: center;
        color: black;
    }
    
    p{
        margin: 0;
        color: green;
    }
}
`