import styled from 'styled-components'

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 260px;
  height: 380px;
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
  color: ${(props) => props.theme.gray300};
  flex: 1;
`

export const PriceNumber = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`

export const CoffeeCart = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  background: ${(props) => props.theme.blue900};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  overflow: hidden;

  a {
    padding: 0.5rem;
    width: 100%;
    height: 100%;
  }
`
