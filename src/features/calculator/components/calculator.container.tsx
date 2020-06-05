import React, { useCallback, useMemo, useState } from 'react';

import { CalculatorPresentational } from './calculator.presentational';
import { StringOperator } from '../models/operator';
import { calculateValue, selectNumber, selectOperator } from '../functions';

export const Calculator = () => {
  const [activeOperator, setActiveOperator] = useState<StringOperator>();
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
    [activeOperator, currentValue, newValue]
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
    [currentValue, newValue]
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
    if (activeOperator) {
      return {
        mainRow: newValue === '0' ? (+currentValue).toLocaleString() : (+newValue).toLocaleString(),
        subRow: `${currentValue} ${activeOperator} ${newValue}`,
      };
    }
    return { mainRow: (+currentValue).toLocaleString(), subRow: '' };
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
