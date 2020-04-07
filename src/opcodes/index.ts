import { System } from '../systemState';
import op00EE from './op00EE';
import op0NNN from './op0NNN';
import op1NNN from './op1NNN';
import op2NNN from './op2NNN';

type Opcodes = {
  [key: number]: (system: System) => System;
};

const opcodes = (key: number) =>
  (({
    0xa000: op0NNN,
    0x0000: ({
      /** 0x00E0  */
      0x0000: op0NNN,
      0x000e: op00EE
    } as Opcodes)[key],
    0x1000: op1NNN,
    0x2000: op2NNN
  } as Opcodes)[key]);

export default opcodes;
