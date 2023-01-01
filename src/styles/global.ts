import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    background: ${(props) => props.theme.light200};
    color: ${(props) => props.theme.gray700};
    font-family: 'Playfair Display', serif;
    
    font-family: 'Hanken Grotesk', sans-serif;

    height: 1500px;
  }
  
  body, input, text-area, button {
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smothing: antialiesed;
  }

  li,ul,a{
    text-decoration: none;
    list-style: none;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue200};
  }
`
