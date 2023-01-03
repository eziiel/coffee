import styled from 'styled-components'

export const CartRequestFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`
const BaseCartRequest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CartRequestTotalItems = styled(BaseCartRequest)``

export const CartRequestDelivery = styled(BaseCartRequest)``

export const CartRequestTotal = styled(BaseCartRequest)`
  font-size: 1.5rem;
  font-weight: bold;
`

export const CartRequestConfirmButton = styled.button`
  padding: 1rem;
  border-radius: 8px;
  border: none;

  background: ${(props) => props.theme.yellow600};
  color: ${(props) => props.theme.white};
  font-size: 1.125rem;
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.yellow500};
    color: ${(props) => props.theme.white};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow600};
  }
`
