import styled from 'styled-components';

export const HeadStore = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 48px 0;

  .head-top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 24px;
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
`

export const TitleStore = styled.h1`
  font-family: 'Syne', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #f1f5f9;
  margin: 0;
  line-height: 1.15;
`

export const CategoryPills = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 24px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const CategoryPill = styled.button<{ active?: boolean }>`
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  padding: 8px 18px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.25s ease;
  outline: none;
  flex-shrink: 0;

  background: ${p => p.active ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.04)'};
  border: 1px solid ${p => p.active ? '#10b981' : 'rgba(148,163,184,0.15)'};
  color: ${p => p.active ? '#34d399' : '#94a3b8'};

  &:hover {
    background: rgba(16,185,129,0.1);
    border-color: rgba(16,185,129,0.5);
    color: #34d399;
  }
`

export const SearchInput = styled.input`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  width: 280px;
  padding: 10px 18px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(10px);
  color: #f1f5f9;
  outline: none;
  transition: all 0.25s ease;

  &::placeholder {
    color: #475569;
  }

  &:hover {
    border-color: rgba(16,185,129,0.35);
  }

  &:focus {
    border-color: #10b981;
    background: rgba(16,185,129,0.05);
    box-shadow: 0 0 0 3px rgba(16,185,129,0.12);
  }
`

export const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  padding: 16px 48px 48px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

export const ProductCard = styled.div<{ inCart?: boolean }>`
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid ${p => p.inCart ? 'rgba(16,185,129,0.35)' : 'rgba(255,255,255,0.07)'};
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  ${p => p.inCart && `
    box-shadow: 0 0 30px rgba(16,185,129,0.1), inset 0 0 60px rgba(16,185,129,0.02);
  `}

  &:hover {
    border-color: ${p => p.inCart ? 'rgba(16,185,129,0.6)' : 'rgba(139,92,246,0.3)'};
    box-shadow: ${p => p.inCart
      ? '0 0 40px rgba(16,185,129,0.18)'
      : '0 20px 60px rgba(0,0,0,0.35), 0 0 40px rgba(139,92,246,0.08)'};
  }
`

export const CardImage = styled.div`
  height: 200px;
  background: rgba(255,255,255,0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 160px;
    height: 160px;
    object-fit: contain;
    transition: transform 0.45s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }

  .badge-discount {
    position: absolute;
    top: 12px;
    left: 12px;
    background: linear-gradient(135deg, #059669 0%, #10b981 100%);
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 4px 9px;
    border-radius: 999px;
    letter-spacing: 0.04em;
    box-shadow: 0 2px 8px rgba(16,185,129,0.35);
  }
`

export const CardBody = styled.div`
  padding: 16px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`

export const CardCategory = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #64748b;
`

export const CardTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  color: #f1f5f9;
  margin: 0;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  padding-top: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const CardPrice = styled.span`
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.3rem;
  color: #34d399;
`

export const CardRating = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #f59e0b;
`

export const AddButton = styled.button<{ inCart?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 11px;
  border-radius: 12px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.25s ease;
  outline: none;

  background: ${p => p.inCart ? 'rgba(16,185,129,0.12)' : 'linear-gradient(135deg, #059669 0%, #10b981 100%)'};
  border: 1px solid ${p => p.inCart ? 'rgba(16,185,129,0.4)' : 'transparent'};
  color: ${p => p.inCart ? '#34d399' : '#ffffff'};

  svg {
    font-size: 1rem;
    transition: transform 0.2s ease;
  }

  ${p => p.inCart
    ? `
      &:hover {
        background: rgba(239,68,68,0.12);
        border-color: rgba(239,68,68,0.4);
        color: #f87171;
      }
    `
    : `
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(16,185,129,0.38);
      }
    `
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 16px 20px 52px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    color: #94a3b8;
    cursor: pointer;
    transition: all 0.25s ease;
    outline: none;
    font-size: 1.3rem;

    &:hover:not(:disabled) {
      background: rgba(16,185,129,0.12);
      border-color: rgba(16,185,129,0.4);
      color: #34d399;
      transform: scale(1.08);
    }

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }

  span {
    font-family: 'Syne', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: #94a3b8;
    min-width: 80px;
    text-align: center;
  }
`

export const ResultsInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px 12px;
  max-width: 1400px;
  margin: 0 auto;

  span {
    font-family: 'Inter', sans-serif;
    font-size: 0.825rem;
    color: #64748b;

    strong { color: #94a3b8; font-weight: 600; }
    em { color: #a78bfa; font-style: normal; }
  }

  .page-info {
    font-size: 0.775rem;
    color: #475569;
  }
`

export const SelectStore = styled.div``
