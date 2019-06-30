import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import Menu from './Menu';
import { makeStyles } from '@material-ui/core';
import AccountIcon from '@material-ui/icons/AccountCircleOutlined';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles({
  root: {
    padding: 10,
  },
  avatarIcon: {
    width: 60,
    height: 60,
  },
  profileBox: {
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default function Profile() {
  const app = React.useContext(AppContext);
  const classes = useStyle();

  React.useEffect(() => {
    app.dispatch({ type: 'set-page-title', title: 'Профиль' });

    return () => {
      app.dispatch({ type: 'reset-page-title' });
    };
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.profileBox}>
        <AccountIcon className={classes.avatarIcon}/>
        <Typography variant="h5" component="h5">
          Петр Козин
        </Typography>
      </div>
      <Menu/>
    </div>
  );
}