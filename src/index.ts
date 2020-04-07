import { pipe } from 'ramda';

import decodeOpcode from './decodeOpcode';
import executeOpcode from './executeOpcode';
import fetchOpcode from './fetchOpcode';
import initialState from './systemState';
import updateTimers from './updateTimers';
import nextOpcode from './nextOpcode';

const emulateCycle = pipe(
  fetchOpcode,
  decodeOpcode,
  executeOpcode,
  nextOpcode,
  updateTimers
);

const main = () => emulateCycle(initialState);
