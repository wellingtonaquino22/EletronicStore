import styled from 'styled-components';

export const Template = styled.div`
/* background: linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(174,70,252,1) 100%); */
background: linear-gradient(90deg, rgba(44,123,148,1) 40%, rgba(77,83,159,1) 82%);
min-height: 100vh;
padding-bottom: 1.875rem;
`
export const ProductsArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-bottom: 50px;
    font-size: 25px;

    div{
        color: white;
        background-color: rgb(55, 42, 117);
        height: 520px;
        width: 300px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        
        &:hover{
        transform: scale(1.1);
        background-color: aliceblue;
        color: rgb(55, 42, 117);
        transition: 0.7s;

        h4{
            background-color: rgb(55, 42, 117);
            color: white;
        }
        }
    }

    img{
        width: 180px;
    }

    h4{
        background: white;
        color: blue;
        padding: 10px;
        border-radius: 10px;
    }

    button{
        font-size: 30px;
        background: transparent;
        border: none;
        color: gray;

        &:hover{
            transform: scale(1.2);
        }
    }
`