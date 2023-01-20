import styled from 'styled-components'

export const MainCardItems = styled.main`
  gap: 1rem;
  width: 100%;
  padding-bottom: 5rem;
`

export const TitleItems = styled.ul`
  font-size: 2rem;
  padding: 0 0 3rem 0;
`

export const ListItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  justify-items: center;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`
