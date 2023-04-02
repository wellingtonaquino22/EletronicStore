import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

.Toastify__toast-container {
    font-size: 1.5rem;
    width: auto;
    padding: 1rem;
  }
  
  /* .Toastify__toast--success {
    color: green;
  }
  
  .Toastify__toast--error {
    color: red;
  } */

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: blue;
}

  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: white
  }
`;