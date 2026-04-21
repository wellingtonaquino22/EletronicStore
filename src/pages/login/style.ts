import styled from "styled-components";

export const LoginPage = styled.div`
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  position: relative;
  z-index: 1;
`

export const FormLogin = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 40px 36px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 4px;
  }

  .brand-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.3);
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  .brand-name {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.1rem;
    background: linear-gradient(135deg, #10b981 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .form-header {
    h1 {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      color: #f1f5f9;
      margin: 0 0 6px;
      line-height: 1.2;
    }
    p {
      font-family: 'Inter', sans-serif;
      font-size: 0.875rem;
      color: #64748b;
      margin: 0;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #94a3b8;

    svg { color: #10b981; font-size: 0.9rem; }
  }

  input {
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    background: rgba(255, 255, 255, 0.05);
    color: #f1f5f9;
    padding: 12px 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    outline: none;
    width: 100%;
    transition: all 0.25s ease;

    &::placeholder { color: #475569; }
    &:hover { border-color: rgba(16, 185, 129, 0.35); }
    &:focus {
      border-color: #10b981;
      background: rgba(16, 185, 129, 0.04);
      box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12);
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    padding: 13px;
    cursor: pointer;
    width: 100%;
    margin-top: 4px;
    transition: all 0.25s ease;
    outline: none;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(16, 185, 129, 0.45);
    }

    &:disabled {
      background: rgba(255, 255, 255, 0.06);
      color: #475569;
      cursor: not-allowed;
    }
  }
`

export const WarningFieldLogin = styled.div`
  background: rgba(244, 63, 94, 0.1);
  border: 1px solid rgba(244, 63, 94, 0.25);
  color: #fb7185;
  font-family: 'Inter', sans-serif;
  font-size: 0.825rem;
  font-weight: 500;
  padding: 10px 14px;
  border-radius: 10px;
  text-align: center;
`

export const ButtonRemove = styled.button`
  background: transparent;
  border: none;
  color: #475569;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 6px;
  border-radius: 8px;
  outline: none;

  &:hover {
    color: #f43f5e;
    background: rgba(244, 63, 94, 0.1);
  }
`
