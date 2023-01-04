import styled from 'styled-components'

export const DeliveryContent = styled.main`
  display: flex;
  gap: 4rem;
  padding: 2rem;
  margin-top: 2rem;
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
  /* width: 500px;
  height: 500px; */

  background: linear-gradient(
    135deg,
    ${(propos) => propos.theme.yellow500},
    ${(propos) => propos.theme.blue900}
  );
  border-radius: 8px 60px 8px 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const DeliveryRequestInfo = styled.div`
  width: 98%;
  height: 98%;
  border-radius: 8px 58px 8px 58px;

  background: ${(props) => props.theme.light200};
  border: 20px solid transparent;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2.5rem;

  padding: 1rem;
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
`

const BaseIcon = styled.div`
  background: red;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-right: 1rem;

  border-radius: 50%;
  padding: 0.5rem;
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
  align-self: end;
  width: auto;
  height: auto;
`
