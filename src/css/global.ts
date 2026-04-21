import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .Toastify__toast-container {
    font-size: 0.875rem;
    width: auto;
    padding: 0.5rem;
  }

  .Toastify__toast {
    background: rgba(15, 15, 26, 0.95) !important;
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,0.1) !important;
    color: #f1f5f9 !important;
    border-radius: 12px !important;
    font-family: 'Inter', sans-serif;
  }

  .Toastify__toast--success .Toastify__progress-bar {
    background: #10b981 !important;
  }

  .Toastify__toast--error .Toastify__progress-bar {
    background: #f43f5e !important;
  }

  .Toastify__close-button {
    color: #94a3b8 !important;
  }
`;
