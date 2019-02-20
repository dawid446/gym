import React, { Component } from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import AddBox from '@material-ui/icons/AddCircle';;

class Excercises extends Component {

    add(id){
        this.props.add(id)
    }
    render() {
        return (
            <List>
                {this.props.data.map((dates, i) =>
                    <ListItem key={dates.id}>
                        <ListItemAvatar>
                            <Avatar>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={dates.name} />
                        <ListItemSecondaryAction>
                            <IconButton onClick={this.add.bind(this,dates)}>
                                <AddBox />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )}
            </List>
        )
    }
}
export default Excercises