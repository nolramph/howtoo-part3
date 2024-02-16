import styled from "styled-components"

type FullBackgroundContainerTypes = { backgroundImage: string; children?: React.ReactNode }

const FullBackgroundContainer = ({ backgroundImage, children }: FullBackgroundContainerTypes) => (
  <FullBackgroundDiv backgroundImage={backgroundImage} hasChildren={!!children}>
    {children}
  </FullBackgroundDiv>
)

export default FullBackgroundContainer

const FullBackgroundDiv = styled.div<{ backgroundImage: string; hasChildren: boolean }>`
  width: 100%;
  height: 100%;
  background: ${({ backgroundImage }) => `url(${backgroundImage}) no-repeat center center fixed`};
  background-size: cover;
  background-repeat: no-repeat;
`
