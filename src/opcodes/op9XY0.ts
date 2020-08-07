import produce from '../utils/produce';
import { getX, getY } from '../utils/bit';

const op9XY0 = produce(state => {
  const X = getX(state.OPCODE) >> 8;
  const Y = getY(state.OPCODE) >> 4;

  if (state.V[X] !== state.V[Y]) state.OPCODE += 2;
});

export default op9XY0;
