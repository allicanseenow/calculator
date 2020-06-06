import { getSymbolOperator, CalculationOperator } from '../models/operator';

const parseValue = (value: string) => (+value).toLocaleString(undefined, { maximumSignificantDigits: 11 });

type CalculatedResult = {
  activeOperator: CalculationOperator;
  newValue: string;
  currentValue: string;
  result: string;
};

export const getCalculatedResult = ({ currentValue, newValue, activeOperator, result }: CalculatedResult) =>
  `${currentValue} ${getSymbolOperator(activeOperator)} ${newValue} = ${result}`;

type GetResultsParams = {
  activeOperator?: CalculationOperator;
  newValue: string;
  currentValue: string;
};

export const getDisplayedResults = ({ activeOperator, newValue, currentValue }: GetResultsParams) => {
  if (activeOperator) {
    return {
      mainRow: newValue === '0' ? parseValue(currentValue) : parseValue(newValue),
      subRow: `${currentValue} ${getSymbolOperator(activeOperator)} ${newValue}`,
    };
  }
  return { mainRow: parseValue(currentValue), subRow: '' };
};
