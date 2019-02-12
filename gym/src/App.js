import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components'

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
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);

`
const StyledSquare = styled.div`
  height: 250px;
  width: 250px;
  background-color: #EF476F;
  border-radius: 20px;
  margin: 10px;
`
const StyledSquareAnother = styled(StyledSquare)
`
  background-color: pink;
`
class App extends Component {


  render() {
    return (
      <>
        <GlobalStyle />
        <StyledStart>
          <StyledSquare></StyledSquare>
          <StyledSquareAnother></StyledSquareAnother>
        </StyledStart>
      </>
    );
  }
}

export default App;
