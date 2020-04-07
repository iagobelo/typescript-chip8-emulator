import { produce } from '../utils';

const opEXA1 = produce(state => {
  const X = (state.OPCODE & 0x0f00) >> 8;
  const key = state.V[X];

  if (!state.KEY_PAD[key]) state.PC += 2;
});

export default opEXA1;
