import React from 'react';
import { Grid } from '@material-ui/core';

import { useStyles } from '../styles/calculator-extra-body.style';
import { RoundButton } from '../../shared';

const buttonMap = [
  ['(', ')', 'mc', 'm+', 'm-', 'mr'],
  ['2nd', 'x^2', 'x^3', 'x^y', 'e^x', '10^x'],
  ['1/x', '2', '3', 'y/x', 'ln', 'log10'],
  ['x!', 'sin', 'cos', 'tan', 'e', 'EE'],
  ['Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand'],
];

export const CalculatorExtraBody = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {buttonMap.map((row, i) => {
        return (
          <Grid className={classes.row} key={i}>
            {row.map((buttonValue, j) => (
              <RoundButton key={j} type="scientific">{buttonValue}</RoundButton>
            ))}
          </Grid>
        );
      })}
    </div>
  );
};
