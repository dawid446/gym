import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import colors from '../Utils/colors'

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    font-family: 'Monsterrat';
    color: white;
  }

  *, *::before, *::after{
    box-sizing:border-box;
  }
  `
const StyledStart = styled.div`
  background-color: ${colors.dark};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);

`

const Layout = ({children}) =>
(   <>
    <GlobalStyle/>
        <StyledStart>
            {children}
        </StyledStart>
    </>
)

export default Layout