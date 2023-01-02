import styled from 'styled-components'

export const FormAdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  gap: 1rem;
`

const BaseFormContainer = styled.div`
  background: ${(props) => props.theme.gray100};
  padding: 2rem;
  border-radius: 8px;
`

// export const FormAdressFields = styled(BaseFormContainer).attrs({
//   as: 'main',
// })`

export const FormAdressFields = styled(BaseFormContainer)`
  display: grid;
  grid-template-columns: 1fr 1.5fr 50px;
  gap: 0.5rem;
`

export const FormAdressHeader = styled.header`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 25px 1fr;

  margin-bottom: 2rem;

  span:nth-child(2) {
    font-size: 1.125rem;
    letter-spacing: 0.5;
  }
  span:nth-child(3) {
    grid-column: 2 / -1;
    font-size: 0.875rem;
    color: ${(props) => props.theme.gray500};
  }
`

const BaseInputFields = styled.input`
  background: ${(props) => props.theme.gray200};
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
`

export const AdressCep = styled(BaseInputFields)`
  grid-row: 2;
`

export const AdressStreet = styled(BaseInputFields)`
  grid-row: 3;
  grid-column: 1 / -1;
`

export const AdressNumber = styled(BaseInputFields)`
  grid-row: 4;
  grid-column: 1 / 2;
`

export const AdressComplement = styled(BaseInputFields)`
  grid-row: 4;
  grid-column: 2 / -1;
`

export const AdressDistrict = styled(BaseInputFields)`
  grid-row: 5;
  grid-column: 1 / 2;
`

export const AdressCity = styled(BaseInputFields)`
  grid-row: 5;
  grid-column: 2 / 3;
`

export const AdressState = styled(BaseInputFields)`
  grid-row: 5;
  grid-column: 3 / -1;
`

export const FormAdressPayType = styled(BaseFormContainer).attrs({
  as: 'footer',
})``

export const FormAdressPayTypeHeader = styled.footer``
