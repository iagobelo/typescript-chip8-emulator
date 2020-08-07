import produce from '../utils/produce';
import { getX } from '../utils/bit';

const opFX18 = produce(state => {
  const X = getX(state.OPCODE) >> 8;

  state.SOUND_TIMER = state.V[X];
});

export default opFX18;
