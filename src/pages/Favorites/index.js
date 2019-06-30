import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import { makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    padding: 10,
  },
});

export default function Favorites() {
  const app = React.useContext(AppContext);
  const classes = useStyle();

  React.useEffect(() => {
    app.dispatch({ type: 'set-page-title', title: 'Избранное' });

    return () => {
      app.dispatch({ type: 'reset-page-title' });
    };
  }, []);

  return (
    <Typography variant="body1" component="p" className={classes.root}>
      В избранном ничего нет.
    </Typography>
  );
}