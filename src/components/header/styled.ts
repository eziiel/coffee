import styled from 'styled-components'

export const HeaderComponent = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6.5rem;
  margin: 0 auto;
  @media (max-width: 590px) {
    flex-direction: column;
    gap: 1rem;
  }
`
export const LogoCoffee = styled.div`
  padding: 1rem 1rem 1rem 0;
  height: 80%;
`
export const NavHeader = styled.nav`
  display: flex;
`
export const UlHeader = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
`
const BaseLi = styled.li`
  gap: 0.2rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
`

export const LiLocation = styled(BaseLi)`
  background: ${(props) => props.theme.blue200};
  color: ${(props) => props.theme.blue700};
  font-weight: 600;
  padding: 0.5rem;
  letter-spacing: 0.5px;
`

export const LiCart = styled(BaseLi)`
  background: ${(props) => props.theme.yellow500};
  background: ${(props) => props.theme.yellow500};

  cursor: pointer;
  position: relative;

  a {
    padding: 0.5rem;
    width: 100%;
    height: 100%;
  }
`
export const ItensInfoSpan = styled.span`
  position: absolute;
  content: '';
  min-width: 30px;
  max-width: 40px;
  height: 30px;
  bottom: 50%;
  left: 70%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.yellow700};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 0.875rem;
  padding: 0.5rem;
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.light200};
`
