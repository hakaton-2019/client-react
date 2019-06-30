import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    marginTop: 10,
  },
  title: {
    fontSize: 14,
  },
});

function NotifCardTitle({children}) {
  const classes = useStyles();

  return (
    <Typography className={classes.title} color="textSecondary" gutterBottom>
      {children}
    </Typography>
  );
}

function NotifCardBody({children}) {
  return (
    <Typography variant="body2" component="p">
      {children}
    </Typography>
  );
}

function NotifCard({children}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

export { NotifCard, NotifCardTitle, NotifCardBody };