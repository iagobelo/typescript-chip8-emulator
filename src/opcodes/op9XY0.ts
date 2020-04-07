import { produce } from '../utils';

const op9XY0 = produce(state => {
  const X = (state.OPCODE & 0x0f00) >> 8;
  const Y = (state.OPCODE & 0x00f0) >> 4;

  if (state.V[X] !== state.V[Y]) state.OPCODE += 2;
});

export default op9XY0;
