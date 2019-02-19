import React, { Component } from 'react';
import { Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox';;

class AddExcercises extends Component {

    remove(id){
        this.props.remove(id)
    }
    render() {
        if (this.props.data.length == 0) {
            return (
                <Paper>
                    <p>Brak dodanych cwiczeń</p>
                </Paper>

            )
        }
        return (
            <Paper>
                <List>
                    {this.props.data.map((dates, i) =>
                        <ListItem key={i}>
                            <ListItemAvatar>
                                <Avatar>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={dates.name} />
                            <ListItemSecondaryAction>
                                <IconButton onClick={this.remove.bind(this, dates)}>
                                    <AddBox />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )}
                </List>
            </Paper>
        )
    }
}
export default AddExcercises