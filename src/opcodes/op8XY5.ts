import { produce } from '../utils';

const op8XY5 = produce(state => {
  const X = (state.OPCODE & 0x0f00) >> 8;
  const Y = (state.OPCODE & 0x00f0) >> 4;

  if (state.V[X] > state.V[Y]) state.V[0xf] = 1;
  else state.V[0xf] = 0;

  state.V[X] -= state.V[Y];
});

export default op8XY5;
