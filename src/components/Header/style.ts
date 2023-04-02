import styled from "styled-components"

export const HeaderArea = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 16vh;
    background-color: #4c4ab8;

    div:nth-child(1){
        display: flex;
        color: white;
        align-items: center;
        justify-content: center;     
        font-size: 45px;
        grid-column-start: 2;
        color: white;
        align-items: center;
        justify-content: center;
        gap: 20px;

        a{
        text-decoration: none;
        color: white;
        padding: 8px;

        &:hover{
            color: blueviolet;
            transform: scale(1.2);
            transition: 0.6s;
            background-color: white;
            border-radius: 10px;
        }

    }
    }

    div:nth-child(2){
        display: flex;
        color: white;
        grid-column-start: 3;
        justify-content: flex-end;
        align-items: center;

                span{
                width: 40px;
                background-color: white;
                color: blueviolet;
                border-radius: 999px;
                font-size: 30px;
            }

    
                img{
                    height: 80px;
                    width: 80px;
                    border-radius: 50px;
                    margin: 0px 15px 0px 15px;
                    cursor: pointer;

                    :hover{
                        transform: scale(1.1);
                        transition: 0.5s;
                    }
                }

    }
`