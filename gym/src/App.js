import React, { Component } from 'react';
import styled from 'styled-components'
import colors from '../src/Utils/colors'
import Layout from './layout/Layout';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DateTimePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Paper, IconButton } from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox';

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
    ]
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };
  render() {
    const { selectedDate,exercises } = this.state;
    return (
      <>

        <Layout>
          <StyledMainDiv>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker value={selectedDate} onChange={this.handleDateChange} />
            </MuiPickersUtilsProvider>
            <Paper>
              <List>
              {exercises.map((item,i)=>
                <ListItem key={i}>
                  <ListItemAvatar>
                    <Avatar>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name} />
                  <ListItemSecondaryAction>
                  <IconButton>
                        <AddBox/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
              </List>
            </Paper>

          </StyledMainDiv>
        </Layout>

      </>
    );
  }
}

export default App;

