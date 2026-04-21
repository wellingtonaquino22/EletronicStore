import styled from "styled-components"

export const HeaderArea = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(8, 8, 16, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  height: 72px;

  .logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.2rem;
    background: linear-gradient(135deg, #10b981 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-decoration: none;
    white-space: nowrap;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  nav a {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: #94a3b8;
    text-decoration: none;
    padding: 8px 14px;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
      color: #f1f5f9;
      background: rgba(255, 255, 255, 0.06);
    }
  }

  .right-area {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .cart-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    border: none;
    border-radius: 999px;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    white-space: nowrap;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(16, 185, 129, 0.45);
    }

    span {
      background: rgba(255, 255, 255, 0.25);
      border-radius: 999px;
      padding: 2px 8px;
      font-size: 0.75rem;
    }
  }

  .initial-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid rgba(16, 185, 129, 0.4);
    background: linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(139,92,246,0.2) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1rem;
    color: #34d399;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    flex-shrink: 0;

    &:hover {
      border-color: #10b981;
      transform: scale(1.05);
      background: linear-gradient(135deg, rgba(16,185,129,0.3) 0%, rgba(139,92,246,0.3) 100%);
    }
  }

  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.04);
    color: #64748b;
    cursor: pointer;
    transition: all 0.25s ease;
    outline: none;
    flex-shrink: 0;

    &:hover {
      background: rgba(239,68,68,0.1);
      border-color: rgba(239,68,68,0.3);
      color: #f87171;
    }
  }
`
