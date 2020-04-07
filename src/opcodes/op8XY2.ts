import { produce } from '../utils';

const op8XY2 = produce(state => {
  const X = (state.OPCODE & 0x0f00) >> 8;
  const Y = (state.OPCODE & 0x00f0) >> 4;

  state.V[X] &= state.V[Y];
});

export default op8XY2;
