import React, { FC, memo, ReactNode, ReactText, useCallback } from 'react';
import { Button } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './round-button.style';
import { StringOperator } from '../../calculator/models/operator';

type RoundButton = {
  type: 'number' | 'operator' | 'utility';
  isActive?: boolean;
  children?: ReactNode;
  span?: number;
  onClick?: (value: any) => any;
  value?: StringOperator | number;
};

export const RoundButton: FC<RoundButton> = memo(({ children, type, isActive, span, onClick, value }) => {
  const classes = useStyles({ span });

  const handleClick = useCallback(
    (_e) => {
      if (onClick && value !== undefined) {
        onClick(value);
      }
    },
    [onClick, value]
  );

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        classes={{ root: classes.root, label: classes.label }}
        className={clsx(classes[type], isActive && classes.active)}
        onClick={handleClick}
      >
        {children}
      </Button>
    </div>
  );
});
