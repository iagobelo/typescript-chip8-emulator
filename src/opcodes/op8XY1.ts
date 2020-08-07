import produce from '../utils/produce';
import { getX, getY } from '../utils/bit';

const op8XY1 = produce(state => {
  const X = getX(state.OPCODE) >> 8;
  const Y = getY(state.OPCODE) >> 4;

  state.V[X] |= state.V[Y];
});

export default op8XY1;
