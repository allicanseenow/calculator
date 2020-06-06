import React from 'react';
import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';

import { Calculator, History } from '../features';
import { useHistory } from '../hooks';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: '100%',
    flexDirection: 'column',
    overflowY: 'auto',
  },
});

const Home: NextPage<any> = ({ userAgent }) => {
  const classes = useStyles();
  const [history, setHistory] = useHistory();

  return (
    <div className={classes.container}>
      <Calculator saveHistory={setHistory} />
      <History history={history} />
    </div>
  );
};

// Home.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
//   return { userAgent };
// };

export default Home;
