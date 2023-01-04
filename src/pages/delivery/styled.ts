import styled from 'styled-components'

export const DeliveryContent = styled.main`
  display: flex;
  gap: 2rem;
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
  width: 98.7%;
  height: 98%;
  border-radius: 8px 58px 8px 58px;

  background: ${(props) => props.theme.light200};
  border: 20px solid transparent;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;

  padding: 3rem;
`

export const DeliveryRequestInfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`

const BaseIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;

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

export const DeliveryImg = styled.aside``
