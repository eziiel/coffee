import styled from 'styled-components'

export const FormRequestContainer = styled.div`
  height: fit-content;
  width: 350px;
  overflow: hidden;

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
export const FormRequestTitle = styled.h2`
  padding: 1rem 0;
`

export const FormRequestSection = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: ${(props) => props.theme.gray100};
  border-radius: 8px 60px 8px 60px;
`
