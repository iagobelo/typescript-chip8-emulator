import immer from 'immer';

import { System } from '../systemState';

const produce = (fn: (draft: System) => void) => (state: System) =>
  immer(state, fn);

export default produce;
