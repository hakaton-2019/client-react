import React from 'react';
import { AppContext } from '../../contexts/AppContext';
import { NotifCard, NotifCardTitle, NotifCardBody } from './NotifCard';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    padding: 10,
  },
});

export default function Notifications() {
  const app = React.useContext(AppContext);
  const classes = useStyle();

  React.useEffect(() => {
    app.dispatch({ type: 'set-page-title', title: 'Уведомления' });

    return () => {
      app.dispatch({ type: 'reset-page-title' });
    };
  }, []);

  React.useEffect(() => {
    app.dispatch({ type: 'read-notif' });
  }, [app.state.notifCount]);

  return (
    <div className={classes.root}>
      <NotifCard>
        <NotifCardTitle>
          Ответ на комментарий к <b><u>записи</u></b> в 13:45 от <b><u>Сидоров Алексей</u></b>
        </NotifCardTitle>
        <NotifCardBody>
          Евгений, полностью с Вами согласен!
        </NotifCardBody>
      </NotifCard>
      <NotifCard>
        <NotifCardTitle>
          Ответ на комментарий к <b><u>записи</u></b> в 13:45 от <b><u>Сидоров Алексей</u></b>
        </NotifCardTitle>
        <NotifCardBody>
          Евгений, полностью с Вами согласен!
        </NotifCardBody>
      </NotifCard>
      <NotifCard>
        <NotifCardTitle>
          Ответ на комментарий к <b><u>записи</u></b> в 13:45 от <b><u>Сидоров Алексей</u></b>
        </NotifCardTitle>
        <NotifCardBody>
          Евгений, полностью с Вами согласен!
        </NotifCardBody>
      </NotifCard>
      <NotifCard>
        <NotifCardTitle>
          Ответ на комментарий к <b><u>записи</u></b> в 13:45 от <b><u>Сидоров Алексей</u></b>
        </NotifCardTitle>
        <NotifCardBody>
          Евгений, полностью с Вами согласен!
        </NotifCardBody>
      </NotifCard>
    </div>
  );
}