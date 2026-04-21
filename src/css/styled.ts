import styled from 'styled-components';

export const Template = styled.div`
  background-color: #080810;
  min-height: 100vh;
  padding-top: 72px;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: -250px;
    right: -200px;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 65%);
    pointer-events: none;
    z-index: 0;
    animation: float1 9s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: fixed;
    bottom: -250px;
    left: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%);
    pointer-events: none;
    z-index: 0;
    animation: float2 13s ease-in-out infinite;
  }
`

export const ProductsArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  padding: 0 48px 48px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`
