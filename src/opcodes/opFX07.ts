import { produce } from '../utils';

const opFX07 = produce(state => {
  const X = (state.OPCODE & 0x0f00) >> 8;

  state.V[X] = state.DELAY_TIMER;
});

export default opFX07;
