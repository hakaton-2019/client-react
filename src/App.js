import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Switch, Route } from 'react-router-dom';

import { AppContextConsumer, AppContextProvider } from './contexts/AppContext';

import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';

import Intro from './pages/Intro';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NewPost from './pages/NewPost';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

const useStyles = makeStyles(() => ({
  root: {
    padding: '0 0 56px',
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <AppContextProvider>
      <AppContextConsumer>
        {app =>
          app.state.introPassed
          ? (
            <>
              <TopBar/>
              <Container className={classes.root}>
                <Switch>
                  <Route path="/favourites" component={Favorites}/>
                  <Route path="/new-post" component={NewPost}/>
                  <Route path="/notifications" component={Notifications}/>
                  <Route path="/profile" component={Profile}/>
                  <Route path="/" component={Home}/>
                </Switch>
              </Container>
              <BottomBar/>
            </>
          )
          : <Intro/>
        }
      </AppContextConsumer>
    </AppContextProvider>
  );
}

export default App;