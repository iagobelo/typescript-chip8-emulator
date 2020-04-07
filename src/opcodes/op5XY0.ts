import { produce } from '../utils';

const op5XY0 = produce(state => {
  const X = state.OPCODE & 0x0f00;
  const Y = state.OPCODE & 0x00f0;

  state.PC = state.V[X] === state.V[Y] ? state.PC + 2 : state.PC;
});

export default op5XY0;
