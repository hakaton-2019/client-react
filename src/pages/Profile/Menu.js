import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*<List component="nav" aria-label="Main mailbox folders">*/}
      {/*  <ListItem button>*/}
      {/*    <ListItemIcon>*/}
      {/*      <DraftsIcon />*/}
      {/*    </ListItemIcon>*/}
      {/*    <ListItemText primary="Мой профиль" />*/}
      {/*  </ListItem>*/}
      {/*</List>*/}
      <List component="nav" aria-label="Secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Мой профиль" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Мой заявки" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Мой оценки" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Выйти" />
        </ListItem>
      </List>
    </div>
  );
}