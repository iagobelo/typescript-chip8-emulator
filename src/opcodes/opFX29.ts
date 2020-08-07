import produce from '../utils/produce';
import { getX } from '../utils/bit';
import { FONTSET_START_ADDRESS } from '../constants/fontset';

const opFX29 = produce(state => {
  const X = getX(state.OPCODE) >> 8;
  const DIGIT = state.V[X];

  state.I = FONTSET_START_ADDRESS + 5 * DIGIT;
});

export default opFX29;
