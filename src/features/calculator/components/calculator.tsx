import React from 'react';
import { Grid } from '@material-ui/core';

import { useStyles } from '../styles/calculator.style';
import { RoundButton } from '../../shared';

export const Calculator = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.resultContainer}>
        <div className={classes.result}>808</div>
      </div>
      <div className={classes.buttonContainer}>
        <div className={classes.row}>
          <RoundButton type="utility">C</RoundButton>
          <RoundButton type="utility">+/-</RoundButton>
          <RoundButton type="utility">%</RoundButton>
          <RoundButton type="operator">/-</RoundButton>
        </div>
        <Grid className={classes.row}>
          <RoundButton type="number">7</RoundButton>
          <RoundButton type="number">8</RoundButton>
          <RoundButton type="number">9</RoundButton>
          <RoundButton type="operator">X</RoundButton>
        </Grid>
        <Grid className={classes.row}>
          <RoundButton type="number">4</RoundButton>
          <RoundButton type="number">5</RoundButton>
          <RoundButton type="number">6</RoundButton>
          <RoundButton type="operator">-</RoundButton>
        </Grid>
        <Grid className={classes.row}>
          <RoundButton type="number">1</RoundButton>
          <RoundButton type="number">2</RoundButton>
          <RoundButton type="number">3</RoundButton>
          <RoundButton type="operator">+</RoundButton>
        </Grid>
        <Grid className={classes.row}>
          <RoundButton type="number" span={2}>
            0
          </RoundButton>
          <RoundButton type="number">.</RoundButton>
          <RoundButton type="operator">=</RoundButton>
        </Grid>
      </div>
    </div>
  )
}


