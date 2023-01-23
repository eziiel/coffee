import styled from 'styled-components'

export const ItemCardRequest = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem;
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.gray200};

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }
`

export const ImgCardRequest = styled.img`
  width: 60px;
  justify-self: center;
`

export const InfoItemCardRequest = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  justify-self: center;
  text-align: center;
`

export const TitleItemCardRequest = styled.span`
  grid-row: 1;
  grid-column: 1 / -1;
  font-size: 1rem;

  text-transform: uppercase;
  font-size: 0.8rem;
  color: ${(props) => props.theme.gray700};
  font-weight: bold;
`

export const ButtonItemCardRequest = styled.button`
  grid-row: 2;
  grid-column: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  border: none;
  border-radius: 8px;
  padding: 0.5rem;

  background: ${(props) => props.theme.gray200};
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    outline: 0;
    background: ${(props) => props.theme.blue200};
  }
`

export const PriceCardReques = styled.div`
  align-self: flex-start;
  color: ${(props) => props.theme.gray400};
  font-size: 0.875rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 1/-1;
  justify-content: space-around;

  flex-direction: row;
  @media (max-width: 1040px) {
  }
`
