import React, { FC } from 'react';

import { useStyles } from '../styles/history.style';

type History = {
  history: {
    data: string;
    id: string;
  }[];
};

export const History: FC<History> = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <h3 className={classes.historyTitle}>History (Max: 10 entries)</h3>
        <div className={classes.historyContainer}>
          {history.map((historyEntry) => {
            return (
              <div key={historyEntry.id}>
                {historyEntry.data}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};
