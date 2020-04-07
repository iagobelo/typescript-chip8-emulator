import { produce } from '../utils';

const op8XY6 = produce(state => {
  const X = (state.OPCODE & 0x0f00) >> 8;

  state.V[0xf] = state.V[X] & 0x1;

  state.V[X] >>= 1;
});

export default op8XY6;
