import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AppBar from '@material-ui/core/AppBar';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import StarIcon from '@material-ui/icons/StarBorder';
import PlusIcon from '@material-ui/icons/AddCircleOutline';
import NotifIcon from '@material-ui/icons/NotificationsOutlined';
import ProfileIcon from '@material-ui/icons/AccountCircleOutlined';
import Badge from '@material-ui/core/Badge';

import { AppContext } from '../contexts/AppContext';

import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  btn: {
    minWidth: 0,
  }
});

export default function BottomBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');
  const app = React.useContext(AppContext);

  function handleChange(event, newValue) {
    document.scrollingElement.scrollTop = 0;

    setValue(newValue);
  }

  React.useEffect(() => {
    let selected = document.location.pathname.substr(1);
    if (selected === '') selected = 'home';

    setValue(selected);
  }, []);

  let notifIcon = <NotifIcon />;

  if (app.state.notifCount > 0) {
    notifIcon = <Badge badgeContent={app.state.notifCount} color="secondary">
      {notifIcon}
    </Badge>;
  }


  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          className={classes.btn}
          component={RouterLink}
          to="/"
          value="home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          className={classes.btn}
          component={RouterLink}
          to="/favourites"
          value="favourites"
          icon={<StarIcon />}
        />
        <BottomNavigationAction
          className={classes.btn}
          component={RouterLink}
          to="/new-post"
          value="new-post"
          icon={<PlusIcon />}
        />
        <BottomNavigationAction
          className={classes.btn}
          component={RouterLink}
          to="/notifications"
          value="notifications"
          icon={notifIcon}
        />
        <BottomNavigationAction
          className={classes.btn}
          component={RouterLink}
          to="/profile"
          value="profile"
          icon={<ProfileIcon />}
        />
      </BottomNavigation>
    </AppBar>
  );
}