import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 1040px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
