import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../Utils/theme'

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: white;
  }

  *, *::before, *::after{
    box-sizing:border-box;
  }
  `
const StyledStart = styled.div`
  background-color: ${({theme})=> theme.colors.dark};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);

`

const Layout = ({children}) =>
( <ThemeProvider theme={theme}>
   <>
    <GlobalStyle/>
        <StyledStart>
            {children}
        </StyledStart>
    </>
    </ThemeProvider>
)

export default Layout