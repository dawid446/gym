import React, { Component } from 'react';
import { Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/RemoveCircle';
import styled from 'styled-components'


class AddExcercises extends Component {

    remove(id){
        this.props.remove(id)
    }
    render() {
        if (this.props.data.length === 0) {
            return (
                    <p>Brak dodanych cwiczeń</p>
            )
        }
        return (
                <List>
                    {this.props.data.map((dates, i) =>
                        <ListItem key={dates.id}>
                            <ListItemAvatar>
                                <Avatar >
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={dates.name} />
                            <ListItemSecondaryAction>
                                <IconButton onClick={this.remove.bind(this, dates)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )}
                </List>
        )
    }
}
export default AddExcercises