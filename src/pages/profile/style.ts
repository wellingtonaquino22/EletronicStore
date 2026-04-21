import styled from "styled-components";

export const ProfilePage = styled.div`
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  position: relative;
  z-index: 1;
`

export const ProfileCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 480px;

  .profile-header {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 28px;
    margin-bottom: 28px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .profile-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid rgba(16, 185, 129, 0.4);
    background: linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(139,92,246,0.2) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: #34d399;
    flex-shrink: 0;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  h1 {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.3rem;
    color: #f1f5f9;
    margin: 0;
  }

  .user-email {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    color: #64748b;
  }

  .profile-fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 28px;
  }

  .field {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .field-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #10b981;
  }

  .field-value {
    font-family: 'Inter', sans-serif;
    font-size: 0.925rem;
    font-weight: 500;
    color: #f1f5f9;
  }

  .field-value.green {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    color: #34d399;
  }

  > button {
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
    transition: all 0.25s ease;
    outline: none;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(16, 185, 129, 0.45);
    }
  }
`

export const ProfileFields = ProfileCard;
