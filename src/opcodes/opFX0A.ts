import { produce } from '../utils';

const opFX0A = produce(state => {
  const X = (state.OPCODE & 0x0f00) >> 8;
});

export default opFX0A;
