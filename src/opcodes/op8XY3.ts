import produce from '../utils/produce';
import { getY, getX } from '../utils/bit';

const op8XY3 = produce(state => {
  const X = getX(state.OPCODE) >> 8;
  const Y = getY(state.OPCODE) >> 4;

  state.V[X] ^= state.V[Y];
});

export default op8XY3;
