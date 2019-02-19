import React, { Component } from 'react';
import styled from 'styled-components'
import Layout from './layout/Layout';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DateTimePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import Excercises from './components/ExercisesList';
import AddExcercises from './components/AddedExercises';

const StyledSquare = styled.div`
  height: 250px;
  width: 250px;
  background-color: ${({theme})=> theme.colors.colar};
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
  background-color: ${({theme})=>theme.colors.primary};
`
const StyledMainDiv = styled.div`
  height: 500px;
  width: 350px;
  background-color: ${({theme})=>theme.colors.primary};
  border-radius: 10px;
  display: flex;
  align-content: center;
  flex-direction:column;
`
class App extends Component {
  state = {
    selectedDate: new Date(),
    exercises:[
      {id:1,name:"przysiad"},
      {id:2,name:"martwy"},
      {id:3,name:"wyciskanie"}
    ],
    addexercises:[]
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  addItem = (id) =>
  {
    this.setState(prevState=> ({
      addexercises: [...prevState.addexercises,id],
      exercises: prevState.exercises.filter(el => el !== id)
    }))
  };
  removeItem = (id)=>{
    this.setState(prevState=> ({
      exercises: [...prevState.exercises,id],
      addexercises: prevState.addexercises.filter(el => el !== id)
    }))
  }


  render() {
    const { selectedDate,exercises,addexercises } = this.state;
    return (
      <>
        <Layout>
          <StyledMainDiv>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker value={selectedDate} onChange={this.handleDateChange} />
            </MuiPickersUtilsProvider>

            <Excercises data={exercises} add={this.addItem}></Excercises>
            <AddExcercises data={addexercises} remove={this.removeItem}></AddExcercises>
          </StyledMainDiv>
        </Layout>

      </>
    );
  }
}

export default App;

