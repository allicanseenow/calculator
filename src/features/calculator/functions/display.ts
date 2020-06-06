import { StringOperator, getSymbolOperator } from '../models/operator';

const parseValue = (value: string) => (+value).toLocaleString(undefined, { maximumSignificantDigits: 11 });

type GetResultsParams = {
  activeOperator?: StringOperator;
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
