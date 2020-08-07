import produce from '../utils/produce';
import { getX } from '../utils/bit';

const opFX55 = produce(state => {
  const X = getX(state.OPCODE) >> 8;

  for (let i = 0; i <= X; ++i) {
    state.MEMORY[state.I + i] = state.V[i];
  }
});

export default opFX55;
