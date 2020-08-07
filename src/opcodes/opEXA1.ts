import produce from '../utils/produce';
import { getX } from '../utils/bit';

const opEXA1 = produce(state => {
  const X = getX(state.OPCODE) >> 8;
  const key = state.V[X];

  if (!state.KEY_PAD[key]) state.PC += 2;
});

export default opEXA1;
