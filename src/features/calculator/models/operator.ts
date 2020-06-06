export type CalculationOperator = 'addition' | 'subtraction' | 'multiplication' | 'division';

export type StringOperator =
  | 'clear'
  | 'dot'
  | 'addition'
  | 'subtraction'
  | 'multiplication'
  | 'division'
  | 'absolute'
  | 'remainder'
  | 'equal';

const SymbolOperator = new Map([
  ['addition', '+'],
  ['subtraction', '-'],
  ['multiplication', 'x'],
  ['division', '÷'],
]);

export const getSymbolOperator = (stringOperator: StringOperator) => SymbolOperator.get(stringOperator);
