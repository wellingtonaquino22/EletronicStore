import styled from 'styled-components';

export const CartPage = styled.div`
  position: relative;
  z-index: 1;
  padding: 40px 48px;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`

export const CartHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;

  .label {
    display: block;
    font-family: 'Inter', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #10b981;
    margin-bottom: 6px;
  }

  h1 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: #f1f5f9;
    margin: 0;
    line-height: 1.15;
  }

  .count {
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    font-weight: 600;
    color: #34d399;
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.3);
    padding: 6px 16px;
    border-radius: 999px;
    white-space: nowrap;
  }
`

export const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 32px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CartItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.04);
    padding: 8px;
    flex-shrink: 0;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 4px;
  }

  .category {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #64748b;
  }

  h3 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #f1f5f9;
    margin: 0;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .price {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.1rem;
    color: #34d399;
  }

  .remove-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.07);
    color: #64748b;
    cursor: pointer;
    font-size: 1.1rem;
    flex-shrink: 0;
    transition: all 0.25s ease;
    outline: none;

    &:hover {
      background: rgba(239, 68, 68, 0.12);
      border-color: rgba(239, 68, 68, 0.35);
      color: #f87171;
      transform: scale(1.05);
    }
  }
`

export const CartSummary = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 28px;
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: fit-content;

  h2 {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    color: #f1f5f9;
    margin: 0;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    color: #94a3b8;
  }

  .row.total {
    font-size: 1.05rem;
    color: #f1f5f9;
    font-weight: 600;
  }

  .green {
    color: #34d399;
    font-weight: 700;
  }

  .divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.06);
    width: 100%;
  }

  .warning {
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    color: #f59e0b;
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.25);
    padding: 10px 14px;
    border-radius: 10px;
    line-height: 1.4;
  }

  .back-btn {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #94a3b8;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 11px;
    border-radius: 12px;
    cursor: pointer;
    width: 100%;
    transition: all 0.25s ease;
    outline: none;

    &:hover {
      border-color: rgba(255, 255, 255, 0.2);
      color: #f1f5f9;
    }
  }
`

export const ButtonCart = styled.button`
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

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(16, 185, 129, 0.45);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.06);
    color: #475569;
    box-shadow: none;
    transform: none;
    cursor: not-allowed;
  }

  svg {
    font-size: 1.1rem;
  }
`

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  gap: 16px;
  text-align: center;

  .icon {
    font-size: 5rem;
    line-height: 1;
  }

  h2 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.75rem;
    color: #f1f5f9;
    margin: 0;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    color: #64748b;
    margin: 0;
  }

  button {
    margin-top: 8px;
    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    padding: 12px 32px;
    cursor: pointer;
    transition: all 0.25s ease;
    outline: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(16, 185, 129, 0.45);
    }
  }
`

export const DataCart = styled.div``
