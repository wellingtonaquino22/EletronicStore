import styled from "styled-components";

export const ProfileEditPage = styled.div`
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  position: relative;
  z-index: 1;
`

export const ProfileEditCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 600px;

  .card-title {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    color: #f1f5f9;
    margin: 0 0 32px;
  }

  .fields-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #10b981;
  }

  input {
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    background: rgba(255, 255, 255, 0.05);
    color: #f1f5f9;
    padding: 11px 14px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    outline: none;
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
    margin-top: 28px;
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

// backward compat
export const ProfileEditFields = ProfileEditCard;
