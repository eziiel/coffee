import styled from 'styled-components'

export const DeliveryContent = styled.main`
  display: flex;
  gap: 4rem;
  padding: 2rem;
  margin-top: 2rem;

  @media (max-width: 1070px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const DeliveryInfoTitle = styled.div`
  h1 {
    color: ${(propos) => propos.theme.yellow700};
  }
`

export const DeliveryRequestInfoBorder = styled.div`
  background: linear-gradient(
    135deg,
    ${(propos) => propos.theme.yellow500},
    ${(propos) => propos.theme.blue900}
  );
  border-radius: 8px 60px 8px 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`

export const DeliveryRequestInfo = styled.div`
  border-radius: 8px 58px 8px 58px;

  background: ${(props) => props.theme.light200};

  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 1;
  gap: 2.5rem;

  padding: 2rem;

  @media (max-width: 1070px) {
    gap: 2rem;
  }
`

export const DeliveryRequestInfoItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: center;
  gap: -1rem;

  div:nth-child(1) {
    grid-column: 1;
    grid-row: 1/3;
  }
  span:nth-child(3) {
    grid-column: 2;
  }
  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
`

const BaseIcon = styled.div`
  background: red;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-right: 1rem;

  border-radius: 50%;
  padding: 0.5rem;

  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
`
export const IconDollar = styled(BaseIcon)`
  background: ${(props) => props.theme.blue700};
`
export const IconTimer = styled(BaseIcon)`
  background: ${(props) => props.theme.yellow500};
`
export const IconMap = styled(BaseIcon)`
  background: ${(props) => props.theme.yellow700};
`

export const DeliveryImg = styled.img`
  width: auto;
  height: auto;
  align-self: end;

  @media (max-width: 1070px) {
    align-self: center;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`
