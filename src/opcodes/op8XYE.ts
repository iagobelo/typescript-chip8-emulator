import { produce } from '../utils';

const op8XYE = produce(state => {
  const X = (state.OPCODE & 0x0f00) >> 8;

  state.V[0xf] = (state.V[X] & 0x80) >> 7;

  state.V[X] <<= 1;
});

export default op8XYE;
