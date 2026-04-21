import styled, { keyframes } from "styled-components";

const pulseGreen = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(16,185,129,0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(16,185,129,0); }
`

const pulseRed = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(244,63,94,0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(244,63,94,0); }
`

const spin = keyframes`
  to { transform: rotate(360deg); }
`

export const PaymentPage = styled.div`
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  position: relative;
  z-index: 1;
`

export const CheckoutCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 460px;

  .card-header {
    margin-bottom: 28px;
  }

  .section-label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #10b981;
    margin-bottom: 6px;
  }

  h2 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.6rem;
    color: #f1f5f9;
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .amount-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(16, 185, 129, 0.06);
    border: 1px solid rgba(16, 185, 129, 0.15);
    border-radius: 12px;
    padding: 16px 20px;

    span {
      font-family: 'Inter', sans-serif;
      font-size: 0.875rem;
      color: #94a3b8;
    }

    .amount {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 1.3rem;
      color: #34d399;
    }
  }

  .divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.06);
  }

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #94a3b8;
    }
  }

  .error-msg {
    font-family: 'Inter', sans-serif;
    font-size: 0.825rem;
    color: #fb7185;
    background: rgba(244, 63, 94, 0.1);
    border: 1px solid rgba(244, 63, 94, 0.25);
    padding: 10px 14px;
    border-radius: 10px;
  }

  .pay-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    padding: 14px;
    cursor: pointer;
    width: 100%;
    transition: all 0.25s ease;
    outline: none;
    margin-top: 4px;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(16, 185, 129, 0.45);
    }

    &:disabled {
      background: rgba(255, 255, 255, 0.06);
      color: #475569;
      cursor: not-allowed;

      &::before {
        content: '';
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-top-color: #94a3b8;
        border-radius: 50%;
        animation: ${spin} 0.8s linear infinite;
        margin-right: 8px;
      }
    }
  }
`

export const CardElementWrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 14px 16px;
  transition: all 0.25s ease;

  &:focus-within {
    border-color: #10b981;
    background: rgba(16, 185, 129, 0.04);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12);
  }
`

export const TestCardHint = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.775rem;
  color: #64748b;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 10px 14px;
  line-height: 1.5;

  code {
    font-family: 'Courier New', monospace;
    color: #a78bfa;
    background: rgba(139, 92, 246, 0.1);
    padding: 1px 5px;
    border-radius: 4px;
    font-size: 0.8rem;
  }
`

export const SuccessCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .icon-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #34d399;
    font-size: 2.2rem;
    animation: ${pulseGreen} 2s ease-in-out infinite;
  }

  h2 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    color: #f1f5f9;
    margin: 0;
    text-align: center;
  }

  .info-rows {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 4px;
  }

  .info-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 10px;
    padding: 12px 16px;
  }

  .row-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.825rem;
    color: #64748b;
  }

  .row-value {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    color: #f1f5f9;
  }

  .row-value.green { color: #34d399; }
`

export const ErrorCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(244, 63, 94, 0.2);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;

  .icon-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(244, 63, 94, 0.12);
    border: 1px solid rgba(244, 63, 94, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f87171;
    font-size: 2.2rem;
    animation: ${pulseRed} 2s ease-in-out infinite;
  }

  h2 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    color: #f1f5f9;
    margin: 0;
  }

  .subtitle {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    color: #64748b;
    margin: 0;
    line-height: 1.5;
  }
`

export const InsufficientFunds = ErrorCard;
export const PaymentArea = SuccessCard;
