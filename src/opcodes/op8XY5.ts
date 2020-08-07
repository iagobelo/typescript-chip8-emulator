import produce from '../utils/produce';
import { getY, getX } from '../utils/bit';

const op8XY5 = produce(state => {
  const X = getX(state.OPCODE) >> 8;
  const Y = getY(state.OPCODE) >> 4;

  if (state.V[X] > state.V[Y]) state.V[0xf] = 1;
  else state.V[0xf] = 0;

  state.V[X] -= state.V[Y];
});

export default op8XY5;
