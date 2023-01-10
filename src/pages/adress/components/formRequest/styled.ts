import styled from 'styled-components'

export const FormRequestContainer = styled.div`
  width: 450px;
  height: fit-content;

  overflow: hidden;
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
