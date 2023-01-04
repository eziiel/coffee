import styled from 'styled-components'

export const IntroHome = styled.header`
  width: 100%;
  display: flex;
  padding: 5.875rem 0;
  gap: 3rem;
`
export const IntroImg = styled.img``

export const IntroShow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const IntroTitle = styled.h1`
  font-size: 1.125rem;
`

export const IntroText = styled.p`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 2rem;
`

export const IntroInfo = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`

export const IntroInfoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
const BaseIcon = styled.span`
  padding: 0.5rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const IconCart = styled(BaseIcon)`
  background: ${(props) => props.theme.yellow500};
`
export const IconPackage = styled(BaseIcon)`
  background: ${(props) => props.theme.yellow700};
`
export const IconTimer = styled(BaseIcon)`
  background: ${(props) => props.theme.gray700};
`
export const IconCoffee = styled(BaseIcon)`
  background: ${(props) => props.theme.blue700};
`
