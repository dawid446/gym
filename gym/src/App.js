import React, { Component } from 'react';
import styled from 'styled-components'
import colors from '../src/Utils/colors'
import Layout from './layout/Layout';


const StyledSquare = styled.div`
  height: 250px;
  width: 250px;
  background-color: ${colors.colar};
  border-radius: 20px;
  margin: 10px;
  transition: 0.3s;
  :hover{
    -webkit-transform: scale(1.1);
    -ms-transform: scale()(1.1);
    transform: scale(1.1);
  }
`
const StyledSquareAnother = styled(StyledSquare)
`
  background-color: ${colors.primary};
`
class App extends Component {


  render() {
    return (
      <>
        <Layout>
          <StyledSquare></StyledSquare>
          <StyledSquareAnother></StyledSquareAnother>
        </Layout>

      </>
    );
  }
}

export default App;
