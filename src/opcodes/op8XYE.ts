import produce from '../utils/produce';
import { getX } from '../utils/bit';

const op8XYE = produce(state => {
  const X = getX(state.OPCODE) >> 8;

  state.V[0xf] = (state.V[X] & 0x80) >> 7;

  state.V[X] <<= 1;
});

export default op8XYE;
