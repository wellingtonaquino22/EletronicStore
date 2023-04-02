import styled from "styled-components"

export const TitleStore = styled.h1`
font-size: 50px;
color: white;
`
export const HeadStore = styled.div`
display: grid;
grid-template-columns:  2fr 3fr 2fr;
grid-template-rows: 20vh 10vh;
margin-bottom: 30px;

div:nth-child(1){
    grid-column-start: 2;
    grid-row-start: 1;
    margin: auto;
}
div:nth-child(2){
display: flex;
grid-column-start: 1;
grid-row-start: 2;
grid-column: 1;
align-items: center;
justify-content: center;
margin-left: 2.8rem;
}

div:nth-child(3){
grid-column-start: 3;
grid-row-start: 1;
margin-top: 25px;
margin-right: 10px;
display: flex;
justify-content: flex-end;
align-items: flex-start;

input{
    font-family: monteserrat;
    font-size: 20px;
    background-color: aliceblue;
    padding: 10px;
    border-radius: 10px;
    border: inherit;
    color: blueviolet;
}

}
`
export const SelectStore = styled.div`

select{
    font-family: monteserrat;
    background-color: aliceblue;
    color: blue;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
    border: inherit;
}
`
export const Pagination = styled.div`
display: flex;
justify-content: center;
gap: 20px;
font-size: 30px;
padding: 10px;
border-radius: 10px;
background-color: #372A75;
width: fit-content;
margin: auto;
/* margin-bottom: 20px; */

div{
    color: white;
    cursor: pointer;
    border-radius: 10px;

    :hover{
        transform: scale(1.1);
        transition: 0.5s;
        color: violet;
        background-color: inherit;
    }
}
`