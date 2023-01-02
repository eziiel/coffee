import styled from 'styled-components'

export const CoffeeCard = styled.div`
  background: red;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 260px;
  border-radius: 8px 40px 8px 40px;
  padding: 1rem;
  gap: 1rem;

  background: ${(props) => props.theme.gray100};
`

export const CoffeeImg = styled.img`
  max-width: 100px;
  border-radius: 50%;
  margin-top: -2rem;
`
export const CoffeeTypeList = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`
export const CoffeeType = styled.span`
  background: ${(props) => props.theme.blue900};
  color: ${(props) => props.theme.light100};
  padding: 0.125rem 0.5rem;
  border-radius: 100px;
  font-size: 0.875rem;
  letter-spacing: 0.3px;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  text-transform: capitalize;
`

export const CoffeeTitle = styled.span`
  font-size: 1.25rem;
  text-transform: capitalize;
  font-weight: 700;
`

export const CoffeeInfo = styled.span`
  color: ${(props) => props.theme.gray300};
  text-align: center;
`

export const CoffeeBuy = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
`

export const CoffeePrice = styled.div`
  display: flex;
  align-items: center;
`

export const PriceCifre = styled.span`
  color: ${(props) => props.theme.gray300};
  flex: 1;
`

export const PriceNumber = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`

export const CoffeeControlledAmount = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  overflow: hidden;

  width: 80px;
  height: 100%;
  background-color: red;
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
`

export const CoffeeAmountItems = styled.span`
  font-size: 1.125rem;
`

export const CoffeeCart = styled.button`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  padding: 0.5rem;
  background: ${(props) => props.theme.blue900};
  border-radius: 8px;
  border: none;
  cursor: pointer;
`
