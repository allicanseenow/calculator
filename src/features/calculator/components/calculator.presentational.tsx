import React, { FC } from 'react';

import { useStyles } from '../styles/calculator.style';
import { CalculatorBody } from './calculator-body';
import { CalculationOperator, StringOperator } from '../models/operator';

type CalculatorPresentational = {
  activeOperator?: CalculationOperator;
  onClickNumber: (value: number) => any;
  onClickOperator: (value: StringOperator) => any;
  onClickCalculate: () => any;
  mainRow: string;
  subRow: string;
};

export const CalculatorPresentational: FC<CalculatorPresentational> = ({
  activeOperator,
  onClickNumber,
  onClickOperator,
  onClickCalculate,
  mainRow,
  subRow,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.resultContainer}>
        <div className={classes.result}>{mainRow}</div>
        <div className={classes.subRow}>{subRow}</div>
      </div>
      <CalculatorBody
        activeOperator={activeOperator}
        onClickNumber={onClickNumber}
        onClickOperator={onClickOperator}
        onClickCalculate={onClickCalculate}
      />
    </div>
  );
};
