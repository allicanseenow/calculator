import { Dispatch, SetStateAction } from 'react';

import {CalculationOperator, StringOperator} from '../models/operator';

const getNumberOfDigits = (number: number) => {
  return `${number}`.replace('.', '').length;
};

export const parseDisplayedResult = (result: number) => {
  return `${result}`;
};

type SelectNumberParams = {
  operator?: StringOperator;
  setCurrentValue: Dispatch<SetStateAction<string>>;
  setNewValue: Dispatch<SetStateAction<string>>;
  currentValue: string;
  newValue: string;
  value: number;
  doneCalculation: boolean;
  setDoneCalculation: Dispatch<SetStateAction<boolean>>;
};

export const selectNumber = ({
  operator,
  setCurrentValue,
  setNewValue,
  currentValue,
  newValue,
  value,
  doneCalculation,
  setDoneCalculation,
}: SelectNumberParams) => {
  if (getNumberOfDigits(value) > 10) return;
  if (doneCalculation) {
    setDoneCalculation(false);
    setCurrentValue(`${value}`);
    return;
  }
  const setValue = operator ? setNewValue : setCurrentValue;
  const existingValue = operator ? newValue : currentValue;
  const nextValue = existingValue === '0' ? `${value}` : `${existingValue}${value}`;
  setValue(nextValue);
};

type CalculateValueParams = {
  currentValue: string;
  newValue: string;
  setCurrentValue: Dispatch<SetStateAction<string>>;
  setNewValue: Dispatch<SetStateAction<string>>;
  setActiveOperator: Dispatch<SetStateAction<CalculationOperator | undefined>>;
  operator: StringOperator;
  setDoneCalculation: Dispatch<SetStateAction<boolean>>;
};

export const calculateValue = ({
  currentValue,
  newValue,
  setCurrentValue,
  setNewValue,
  operator,
  setActiveOperator,
  setDoneCalculation,
}: CalculateValueParams) => {
  switch (operator) {
    case 'addition':
      setCurrentValue(parseDisplayedResult(+currentValue + +newValue));
      break;
    case 'subtraction':
      setCurrentValue(parseDisplayedResult(+currentValue - +newValue));
      break;
    case 'multiplication':
      setCurrentValue(parseDisplayedResult(+currentValue * +newValue));
      break;
    case 'division':
      setCurrentValue(parseDisplayedResult(+currentValue / +newValue));
      break;
    default:
      return;
  }
  setNewValue('0');
  setActiveOperator(undefined);
  setDoneCalculation(true);
};

type SelectOperatorParams = {
  operator: StringOperator;
  activeOperator?: StringOperator;
  setActiveOperator: Dispatch<SetStateAction<CalculationOperator | undefined>>;
  setCurrentValue: Dispatch<SetStateAction<string>>;
  setNewValue: Dispatch<SetStateAction<string>>;
  setDoneCalculation: Dispatch<SetStateAction<boolean>>;
  currentValue: string;
  newValue: string;
};

export const selectOperator = ({
  operator,
  activeOperator,
  setActiveOperator,
  setCurrentValue,
  setNewValue,
  currentValue,
  newValue,
  setDoneCalculation,
}: SelectOperatorParams) => {
  const value = activeOperator ? newValue : currentValue;
  const setValue = activeOperator ? setNewValue : setCurrentValue;

  switch (operator) {
    case 'addition':
    case 'multiplication':
    case 'division':
    case 'subtraction':
      setDoneCalculation(false);
      setActiveOperator(operator);
      break;
    case 'remainder': {
      const a = +value / 100;
      setValue(`${+value / 100}`);
      break;
    }
    case 'absolute': {
      if (value.startsWith('-')) setValue(value.replace('-', ''));
      else if (value !== '0') setValue(`-${value}`);
      break;
    }
    case 'clear': {
      setCurrentValue('0');
      setNewValue('0');
      setActiveOperator(undefined);
      setDoneCalculation(false);
      break;
    }
    case 'dot': {
      if (!value.includes('.')) setValue(`${value}.`);
      break;
    }
    default:
      return;
  }
};
