import produce from '../utils/produce';
import { getY, getX } from '../utils/bit';

const op5XY0 = produce(state => {
  const X = getX(state.OPCODE);
  const Y = getY(state.OPCODE);

  state.PC = state.V[X] === state.V[Y] ? state.PC + 2 : state.PC;
});

export default op5XY0;
