import produce from '../utils/produce';
import { getX, getY } from '../utils/bit';

const op8XY7 = produce(state => {
  const X = getX(state.OPCODE) >> 8;
  const Y = getY(state.OPCODE) >> 4;

  if (state.V[X] > state.V[Y]) state.V[0xf] = 1;
  else state.V[0xf] = 0;

  state.V[X] = state.V[Y] - state.V[X];
});

export default op8XY7;
