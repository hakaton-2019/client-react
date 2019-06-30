import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Link as RouterLink } from 'react-router-dom';


const useStyle = makeStyles({
  btnTitle: {
    display: 'inline-block',
    marginBottom: 3,
  },
  btnLine: {
    content: '',
    display: 'block',
    position: 'absolute',
    width: '40%',
    height: 3,
    backgroundColor: '#fff',
    bottom: 26,
    left: 26,
  },
  btnContainer: {
    maxWidth: '50%',
    minHeight: 160,
  },
  btn: {
    position: 'relative',
    padding: '26px 26px 52px',
    background: 'linear-gradient(#0997FF, #1AC3D8)',
    color: '#fff',
    textTransform: 'none',
    lineHeight: 1.3,
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
  },
});

function ButtonCard({ title, text, linkTo }) {
  const classes = useStyle();

  return (
    <Grid item className={classes.btnContainer}>
      <Button component={RouterLink} to={linkTo} className={classes.btn}>
        <div>
          <b className={classes.btnTitle}>{title}</b><br/>
          <small>{text}</small>
        </div>
        <div className={classes.btnLine}/>
      </Button>
    </Grid>
  );
}

export default function Menu() {

  return (
    <Grid container spacing={2} style={{padding: 0}}>
      <ButtonCard
        title="Сообщить о проблеме"
        text="в управляющую компанию"
        linkTo="/qwe"
      />
      <ButtonCard
        title="Информация об УК"
        text="моего дома"
        linkTo="/"
      />
      <ButtonCard
        title="Аварийная служба"
        text="моего района"
        linkTo="/"
      />
      <ButtonCard
        title="Внести показания"
        text="приборов учёта"
        linkTo="/"
      />
      <ButtonCard
        title="Региональный оператор"
        text="моего города"
        linkTo="/"
      />
      <ButtonCard
        title="Оперативный дежурный"
        text="моего района"
        linkTo="/"
      />
    </Grid>
  );
}