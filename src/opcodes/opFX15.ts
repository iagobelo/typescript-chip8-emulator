import produce from '../utils/produce';
import { getX } from '../utils/bit';

const opFX15 = produce(state => {
  const X = getX(state.OPCODE) >> 8;

  state.DELAY_TIMER = state.V[X];
});

export default opFX15;
