import styled, { css } from 'styled-components'

interface FocusButton {
  focusButton: boolean
}

export const FormAdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1040px) {
    width: 700px;
  }
  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 650px) {
    width: 500px;
  }
  @media (max-width: 580px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`

export const FormAdressTitle = styled.h2`
  padding: 1rem 0;
`

const BaseFormContainer = styled.div`
  background: ${(props) => props.theme.gray100};
  padding: 2rem;
  border-radius: 8px;
`

export const FormAdressFields = styled(BaseFormContainer).attrs({
  as: 'main',
})`
  display: grid;
  grid-template-columns: 1fr 1.5fr 50px;
  gap: 0.5rem;

  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
  }
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
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  overflow: hidden;
`

export const AdressCep = styled(BaseInputFields)`
  grid-row: 2;
  @media (max-width: 580px) {
    width: 150px;
  }
`

export const AdressStreet = styled(BaseInputFields)`
  grid-row: 3;
  grid-column: 1 / -1;
`

export const AdressNumber = styled(BaseInputFields)`
  grid-row: 4;
  grid-column: 1 / 2;
  @media (max-width: 580px) {
    width: 100px;
  }
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

  @media (max-width: 580px) {
    width: 150px;
  }
`

export const AdressState = styled(BaseInputFields)`
  grid-row: 5;
  grid-column: 3 / -1;
  @media (max-width: 580px) {
    width: 50px;
  }
`

export const FormAdressPayType = styled(BaseFormContainer).attrs({
  as: 'footer',
})``

export const FormAdressPayTypeHeader = styled.footer`
  display: flex;
  flex-direction: column;
`
export const FooterHeader = styled.div`
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
export const FooterCartPay = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`

export const FooterCartItem = styled.button<FocusButton>`
  border: none;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  @media (max-width: 580px) {
    padding-left: 35%;
  }

  background: ${(props) => props.theme.gray200};
  padding: 1rem;
  text-transform: uppercase;
  border-radius: 8px;
  cursor: pointer;
  color: ${(props) => props.theme.gray700};

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    outline: 0;
    background: ${(props) => props.theme.blue200};
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue500};
  }
  ${(props) =>
    props.focusButton === true &&
    css`
      outline: 0;
      background: ${(props) => props.theme.blue200};
      box-shadow: 0 0 0 2px ${(props) => props.theme.blue500};
    `}
`
