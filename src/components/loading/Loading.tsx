import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`

const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  padding: 0 48px 48px;
  max-width: 1400px;
  margin: 0 auto;
`

const SkeletonCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  overflow: hidden;
`

const SkeletonImg = styled.div`
  height: 200px;
  background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  background-size: 200% auto;
  animation: ${shimmer} 1.8s linear infinite;
`

const SkeletonBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const SkeletonLine = styled.div<{ w?: string; h?: string }>`
  height: ${p => p.h || '12px'};
  width: ${p => p.w || '100%'};
  border-radius: 6px;
  background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  background-size: 200% auto;
  animation: ${shimmer} 1.8s linear infinite;
`

export const Loading = () => (
  <SkeletonGrid>
    {Array.from({ length: 8 }).map((_, i) => (
      <SkeletonCard key={i}>
        <SkeletonImg />
        <SkeletonBody>
          <SkeletonLine w="40%" h="10px" />
          <SkeletonLine w="75%" h="16px" />
          <SkeletonLine w="50%" h="26px" />
          <SkeletonLine h="44px" style={{ borderRadius: '12px', marginTop: '4px' }} />
        </SkeletonBody>
      </SkeletonCard>
    ))}
  </SkeletonGrid>
)
