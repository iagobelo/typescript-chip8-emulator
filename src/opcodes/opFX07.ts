import produce from '../utils/produce';
import { getX } from '../utils/bit';

const opFX07 = produce(state => {
  const X = getX(state.OPCODE) >> 8;

  state.V[X] = state.DELAY_TIMER;
});

export default opFX07;
