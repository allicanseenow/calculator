import React, { useCallback, useMemo, useState } from 'react';

import { CalculatorPresentational } from './calculator.presentational';
import { CalculationOperator, StringOperator } from '../models/operator';
import { calculateValue, getDisplayedResults, selectNumber, selectOperator } from '../functions';

export const Calculator = () => {
  const [activeOperator, setActiveOperator] = useState<CalculationOperator>();
  const [currentValue, setCurrentValue] = useState<string>('0');
  const [newValue, setNewValue] = useState<string>('0');
  const [doneCalculation, setDoneCalculation] = useState(false);

  const onClickNumber = useCallback(
    (value: number) => {
      selectNumber({
        operator: activeOperator,
        currentValue,
        newValue,
        setCurrentValue,
        setNewValue,
        value,
        doneCalculation,
        setDoneCalculation,
      });
    },
    [activeOperator, currentValue, doneCalculation, newValue]
  );

  const onClickOperator = useCallback(
    (operator: StringOperator) => {
      selectOperator({
        operator,
        activeOperator,
        setActiveOperator,
        currentValue,
        newValue,
        setCurrentValue,
        setNewValue,
        setDoneCalculation,
      });
    },
    [activeOperator, currentValue, newValue]
  );

  const onClickCalculate = useCallback(() => {
    if (activeOperator) {
      calculateValue({
        operator: activeOperator,
        setActiveOperator,
        currentValue,
        newValue,
        setCurrentValue,
        setNewValue,
        setDoneCalculation,
      });
    }
  }, [activeOperator, currentValue, newValue]);

  const { mainRow, subRow } = useMemo(() => {
    return getDisplayedResults({ activeOperator, currentValue, newValue });
  }, [activeOperator, currentValue, newValue]);

  return (
    <CalculatorPresentational
      activeOperator={activeOperator}
      onClickNumber={onClickNumber}
      onClickOperator={onClickOperator}
      onClickCalculate={onClickCalculate}
      mainRow={mainRow}
      subRow={subRow}
    />
  );
};
