import React from 'react';
import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core/styles';

import { Calculator } from '../features/calculator';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: '100%',
  },
});

const Home: NextPage<any> = ({ userAgent }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Calculator />
    </div>
  );
};

// Home.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
//   return { userAgent };
// };

export default Home;
