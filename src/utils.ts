import immer from 'immer';

import { System } from './systemState';

export const doIt = <T>(fn: (value: T) => void) => (value: T) => {
  fn(value);
  return value;
};

export const produce = (fn: (draft: System) => void) => (state: System) =>
  immer(state, fn);
