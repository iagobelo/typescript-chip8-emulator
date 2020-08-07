import produce from '../utils/produce';
import { getX } from '../utils/bit';

const opFX1E = produce(state => {
  const X = getX(state.OPCODE) >> 8;

  state.I = state.V[X];
});

export default opFX1E;
