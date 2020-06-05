import React, { FC, memo, ReactNode } from 'react';
import { Button } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './round-button.style';

type RoundButton = {
  type: 'number' | 'operator' | 'utility';
  isActive?: boolean;
  children?: ReactNode;
  span?: number;
};

export const RoundButton: FC<RoundButton> = memo(({ children, type, isActive, span }) => {
  const classes = useStyles({ span });

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        classes={{ root: classes.root, label: classes.label }}
        className={clsx(classes[type], isActive && classes.active)}
      >
        {children}
      </Button>
    </div>
  );
});
