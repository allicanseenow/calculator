import React, { FC, memo } from 'react';
import { Grid } from '@material-ui/core';

import { RoundButton } from '../../shared';
import { useStyles } from '../styles/calculator-body.style';
import { CalculationOperator, StringOperator } from '../models/operator';

type CalculatorBody = {
  activeOperator?: CalculationOperator;
  onClickNumber: (value: number) => any;
  onClickOperator: (value: StringOperator) => any;
  onClickCalculate: () => any;
};

export const CalculatorBody: FC<CalculatorBody> = memo(
  ({ activeOperator, onClickNumber, onClickOperator, onClickCalculate }) => {
    const classes = useStyles();

    const isActiveOperator = (localOperator: CalculationOperator) => localOperator === activeOperator;

    return (
      <div className={classes.buttonContainer}>
        <Grid className={classes.row}>
          <RoundButton type="utility" onClick={onClickOperator} value="clear">
            C
          </RoundButton>
          <RoundButton type="utility" onClick={onClickOperator} value="absolute">
            +/-
          </RoundButton>
          <RoundButton type="utility" onClick={onClickOperator} value="remainder">
            %
          </RoundButton>
          <RoundButton
            isActive={isActiveOperator('division')}
            type="operator"
            onClick={onClickOperator}
            value="division"
          >
            ÷
          </RoundButton>
        </Grid>
        <Grid className={classes.row}>
          <RoundButton type="number" onClick={onClickNumber} value={7}>
            7
          </RoundButton>
          <RoundButton type="number" onClick={onClickNumber} value={8}>
            8
          </RoundButton>
          <RoundButton type="number" onClick={onClickNumber} value={9}>
            9
          </RoundButton>
          <RoundButton
            isActive={isActiveOperator('multiplication')}
            type="operator"
            onClick={onClickOperator}
            value="multiplication"
          >
            X
          </RoundButton>
        </Grid>
        <Grid className={classes.row}>
          <RoundButton type="number" onClick={onClickNumber} value={4}>
            4
          </RoundButton>
          <RoundButton type="number" onClick={onClickNumber} value={5}>
            5
          </RoundButton>
          <RoundButton type="number" onClick={onClickNumber} value={6}>
            6
          </RoundButton>
          <RoundButton
            isActive={isActiveOperator('subtraction')}
            type="operator"
            onClick={onClickOperator}
            value="subtraction"
          >
            -
          </RoundButton>
        </Grid>
        <Grid className={classes.row}>
          <RoundButton type="number" onClick={onClickNumber} value={1}>
            1
          </RoundButton>
          <RoundButton type="number" onClick={onClickNumber} value={2}>
            2
          </RoundButton>
          <RoundButton type="number" onClick={onClickNumber} value={3}>
            3
          </RoundButton>
          <RoundButton
            isActive={isActiveOperator('addition')}
            type="operator"
            onClick={onClickOperator}
            value="addition"
          >
            +
          </RoundButton>
        </Grid>
        <Grid className={classes.row}>
          <RoundButton type="number" span={2} onClick={onClickNumber} value={0}>
            0
          </RoundButton>
          <RoundButton type="number" value="dot" onClick={onClickOperator}>
            .
          </RoundButton>
          <RoundButton type="operator" onClick={onClickCalculate} value="equal">
            =
          </RoundButton>
        </Grid>
      </div>
    );
  }
);
