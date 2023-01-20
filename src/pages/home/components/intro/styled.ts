import styled from 'styled-components'

export const IntroHome = styled.header`
  width: 100%;
  display: flex;
  padding: 5.875rem 0;
  gap: 3rem;
`
export const IntroImg = styled.img`
  justify-self: center;
  @media (max-width: 1050px) {
    width: 80%;
    height: 50%;
    padding: 2rem;
    display: none;
  }
`

export const IntroImgReponse = styled.img`
  display: none;
  justify-self: center;
  @media (max-width: 1050px) {
    width: 50%;
    display: initial;
    padding-top: 2rem;
  }
`

export const IntroShow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const IntroShowAll = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`

export const IntroTitle = styled.h1`
  font-size: 1.125rem;

  @media (max-width: 1050px) {
    font-size: 0.9rem;
  }
`

export const IntroText = styled.p`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 2rem;

  @media (max-width: 1050px) {
    font-size: 1.5rem;
  }
`

export const IntroInfo = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
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
// @media(max-width:1050px){

// }
