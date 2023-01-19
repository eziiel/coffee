import styled from 'styled-components'

export const CoffeeControlledAmount = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  overflow: hidden;

  width: 80px;
  height: 100%;
  background: ${(props) => props.theme.gray200};

  font-size: 1.5rem;
`
export const CoffeeAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 100%;

  color: ${(props) => props.theme.blue900};
  cursor: pointer;
  font-weight: bold;
`

export const CoffeeAmountItems = styled.span`
  font-size: 1.125rem;
`
