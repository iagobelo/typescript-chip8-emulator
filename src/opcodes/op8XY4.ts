import { produce } from '../utils';

const op8XY4 = produce(state => {
  const X = (state.OPCODE & 0x0f00) >> 8;
  const Y = (state.OPCODE & 0x00f0) >> 4;
  const SUM = state.V[X] + state.V[Y];

  if (SUM > 0xff) state.V[0xf] = 1;
  else state.V[0xf] = 0;

  state.V[X] = SUM & 0xff;
});

export default op8XY4;
