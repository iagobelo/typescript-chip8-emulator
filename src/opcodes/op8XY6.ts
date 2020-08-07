import produce from '../utils/produce';
import { getX } from '../utils/bit';

const op8XY6 = produce(state => {
  const X = getX(state.OPCODE) >> 8;

  state.V[0xf] = state.V[X] & 0x1;

  state.V[X] >>= 1;
});

export default op8XY6;
