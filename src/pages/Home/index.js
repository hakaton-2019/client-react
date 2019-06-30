import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core';

import Container from '@material-ui/core/Container';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Menu from './Menu';
import News from './News';

const useStyles = makeStyles(theme => ({
  fabButton: {
    position: 'fixed',
    zIndex: 1,
    bottom: 15,
    right: 15,
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'sticky',
    top: 0,
    zIndex: 1,
  },
  tabs: {
    width: '100%',
    backgroundColor: '#fff',
  },
  appBar: {
    boxShadow: 'none',
  },
}));

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const containerRef = React.useRef(null);

  function handleChange(event, newValue) {
    setSelectedTab(newValue);
  }

  function handleChangeIndex(index) {
    setSelectedTab(index);
  }

  React.useEffect(() => {
    if (containerRef.current) {
      document.scrollingElement.scrollTop = document.scrollingElement.scrollTop >= 56 ? 56 : 0;
    }
  }, [containerRef, selectedTab]);

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            className={classes.tabs}
          >
            <Tab label="Меню" />
            <Tab label="Новости" />
          </Tabs>
        </AppBar>
      </div>
      <Container style={{ padding: 0 }} ref={containerRef}>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={selectedTab}
          onChangeIndex={handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Menu/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <News/>
          </TabContainer>
        </SwipeableViews>
      </Container>
    </>
  );
}