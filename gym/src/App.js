import React, { Component } from 'react';
import styled from 'styled-components'
import Layout from './layout/Layout';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DateTimePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import Excercises from './components/ExercisesList';
import AddExcercises from './components/AddedExercises';
import { Paper } from '@material-ui/core';

const StyledSquare = styled.div`
  height: 250px;
  width: 250px;
  background-color: ${({ theme }) => theme.colors.colar};
  border-radius: 20px;
  margin: 10px;
  transition: 0.3s;
  :hover{
    -webkit-transform: scale(1.1);
    -ms-transform: scale()(1.1);
    transform: scale(1.1);
  }
`
const StyledListEx = styled.div`
  height: auto;
  min-height:100px;
  width: 350px;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 10px;
  display: flex;
  align-content: center;
  flex-direction:column;
  margin-bottom: 10px;
`
const StyledListAdd = styled(StyledListEx)
  `
  height:auto;
  background-color: ${({ theme }) => theme.colors.primary};
`
const StyledListDate = styled(StyledListEx)
  `
  display: flex;
  align-items: center;
  justify-content: center;
  height:70px;
  background-color: ${({ theme }) => theme.colors.colar};
`
class App extends Component {
  state = {
    selectedDate: new Date(),
    exercises: [
      { id: 1, name: "przysiad" },
      { id: 2, name: "martwy" },
      { id: 3, name: "wyciskanie" }
    ],
    addexercises: []
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  addItem = (id) => {
    this.setState(prevState => ({
      addexercises: [...prevState.addexercises, id],
      exercises: prevState.exercises.filter(el => el !== id)
    }))
  };
  removeItem = (id) => {
    this.setState(prevState => ({
      exercises: [...prevState.exercises, id],
      addexercises: prevState.addexercises.filter(el => el !== id)
    }))
  }


  render() {
    const { selectedDate, exercises, addexercises } = this.state;
    return (
      <>
        <Layout>
          <p>SmartGym</p>
          <StyledListDate>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker value={selectedDate} onChange={this.handleDateChange} />
            </MuiPickersUtilsProvider>
          </StyledListDate>

            <StyledListEx>
            <Excercises data={exercises} add={this.addItem}></Excercises>
          </StyledListEx>
          <StyledListAdd>
            <AddExcercises data={addexercises} remove={this.removeItem}></AddExcercises>
          </StyledListAdd>

        </Layout>

      </>
    );
  }
}

export default App;

