import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';

import { AppContext } from '../contexts/AppContext';

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'block',
  },
  appBar: {
    backgroundColor: '#fff',
    boxShadow: 'none',
    color: '#000',
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const app = React.useContext(AppContext);

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {app.state.pageTitle}
          </Typography>
          <div className={classes.grow} />
          <IconButton aria-label="Show 4 new mails" color="inherit">
            <Badge color="secondary">
              <SearchIcon color="action"/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}