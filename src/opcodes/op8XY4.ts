import produce from '../utils/produce';
import { getX, getY } from '../utils/bit';

const op8XY4 = produce(state => {
  const X = getX(state.OPCODE) >> 8;
  const Y = getY(state.OPCODE) >> 4;
  const SUM = state.V[X] + state.V[Y];

  if (SUM > 0xff) state.V[0xf] = 1;
  else state.V[0xf] = 0;

  state.V[X] = SUM & 0xff;
});

export default op8XY4;
