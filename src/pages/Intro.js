import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { AppContext } from '../contexts/AppContext';

function TabContainer({ children, dir, ...props }) {
  const classes = useStyles();

  let className = classes.tab;

  if (props.first) className = className.concat(' ', classes.tabFirst);

  return (
    <Typography component="div" dir={dir} className={className}>
      {children}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    width: '100%',
  },
  tab: {
    padding: '50% 0 0',
    boxSizing: 'border-box',
    minHeight: '100vh',
    textAlign: 'center',
  },
  tabFirst: {
    backgroundColor: '#90E759',
    color: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  btn: {
    marginTop: 5,
    backgroundColor: '#86DFEB',
    color: '#000',
    padding: '8px 22px',
  },
  skip: {
    marginTop: 5,
    color: '#000',
    fontSize: 12,
  },
}));

export default function Intro() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const app = React.useContext(AppContext);

  function handleChangeIndex(index) {
    setValue(index);
  }

  function goNext() {
    setValue(index => index + 1);
  }

  function skip() {
    setValue(4);
  }

  function logIn() {
    app.dispatch({ type: 'intro-passed' });
  }

  return (
    <div className={classes.root}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction} first>
          <h2 className={classes.title}>Добро пожаловать</h2>
          <p>
            Теперь управление жилищными<br/>
            вопросами стало проще!
          </p>
          <Button
            variant="contained"
            onClick={goNext}
            className={classes.btn}
            style={{backgroundColor: '#1BC3D8', color: '#fff'}}
          >
            Продолжить
          </Button>
          <br/>
          <Button
            variant="text"
            onClick={skip}
            className={classes.skip}
            style={{color: '#fff'}}
          >
            Пропустить
          </Button>
        </TabContainer>

        <TabContainer dir={theme.direction}>
          <h2 className={classes.title}>Вносите показания</h2>
          <p>
            Не выходя из дома, без бумаг<br/>
            и волокиты!
          </p>
          <Button
            variant="contained"
            onClick={goNext}
            className={classes.btn}
          >
            Продолжить
          </Button>
          <br/>
          <Button
            variant="text"
            onClick={skip}
            className={classes.skip}
          >
            Пропустить
          </Button>
        </TabContainer>

        <TabContainer dir={theme.direction}>
          <h2 className={classes.title}>Содействуйте</h2>
          <p>
            Помогайте УК решать вопросы -<br/>
            оставьте информацию о проблеме в 2 клика!
          </p>
          <Button
            variant="contained"
            onClick={goNext}
            className={classes.btn}
          >
            Продолжить
          </Button>
          <br/>
          <Button
            variant="text"
            onClick={skip}
            className={classes.skip}
          >
            Пропустить
          </Button>
        </TabContainer>

        <TabContainer dir={theme.direction}>
          <h2 className={classes.title}>Связь со всеми службами</h2>
          <p>
            Контактируйте с предприятми и службами<br/>
            вашего района
          </p>
          <Button
            variant="contained"
            onClick={goNext}
            className={classes.btn}
          >
            Продолжить
          </Button>
        </TabContainer>

        <TabContainer dir={theme.direction}>
          <h2 className={classes.title}>Приступим</h2>
          <p>
            Авторизуйтесь, используя аккаунт<br/>
            госуслуг (ЕСИА)
          </p>
          <Button
            variant="contained"
            onClick={logIn}
            className={classes.btn}
          >
            Войти
          </Button>
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}