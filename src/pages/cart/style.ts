import styled from "styled-components"

export const DataCart = styled.div`
font-size: 25px;
font-weight: 600;
color: white;
border-radius: 10px;

div{
border-radius: 10px;
color: black;
background-color: white;
height: 50px;
width: 100%;

span{
    color: green;
    background-color: gray;
}

h3{
    color: blueviolet;
}

}

`
export const ProductsCart = styled.div`
display: grid;
grid-template-columns: 3fr 1fr 2fr 1fr;
grid-template-rows: 24vh;
margin-bottom: 30px;
background-color: #5e82c9;
margin-top: 30px;

div{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: 600;
    border-radius: 10px;

    h3{
        margin: 0;
        color: white;
    }
    span{
        background-color: white;
        padding: 2px;
        color: green;
        border-radius: 10px;
    }
}
div:nth-child(1){
    grid-column-start: 2;
}
div:nth-child(2){
    flex-direction: column;
    gap: 10px;
}

div:nth-child(3){
    grid-column-start: 4;
}

`
export const ButtonCart = styled.button`
padding: 8px;
font-size: 30px;
background-color: #00A000;
border-radius: 10px;
border: inherit;
margin-bottom: 20px;
color: white;

&:hover{
    background-color: green;
    transform: scale(1.1);
}
&:disabled{
    color: gray;
    opacity: 0.7;
    background-color: white;
}
`
export const WarningFieldCart = styled.div`
height: 75vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 15px;

p{
    background-color: #FF3737;
    color: white;
    font-size: 25px;
    padding: 10px;
    border-radius: 10px;
    margin: 0;
    
}

button{
    background-color: #643B75;
    color: white;
    border-radius: 10px;
    border: inherit;
    padding: 5px;
    font-size: 30px;

    :hover{
        transform: scale(1.1);
        transition: 0.5s;
    }
}
`