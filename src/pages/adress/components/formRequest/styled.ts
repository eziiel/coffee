import styled from 'styled-components'

export const FormRequestContainer = styled.form`
  width: 450px;
  height: fit-content;
  border-radius: 8px 60px 8px 60px;

  overflow: hidden;
  padding: 1rem;

  background: ${(props) => props.theme.gray100};
`
