import produce from '../utils/produce';
import { getY, getX } from '../utils/bit';

const op8XY0 = produce(state => {
  const X = getX(state.OPCODE);
  const Y = getY(state.OPCODE);

  state.V[X] = state.V[Y];
});

export default op8XY0;
