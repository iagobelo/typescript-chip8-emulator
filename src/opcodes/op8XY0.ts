import { produce } from '../utils';

const op8XY0 = produce(state => {
  const X = state.OPCODE & 0x0f00;
  const Y = state.OPCODE & 0x00f0;

  state.V[X] = state.V[Y];
});

export default op8XY0;
