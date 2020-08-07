import produce from '../utils/produce';
import { getX } from '../utils/bit';

const opFX65 = produce(state => {
  const X = getX(state.OPCODE) >> 8;

  for (let i = 0; i <= state.V[X]; ++i) {
    state.V[i] = state.MEMORY[state.I + i];
  }
});

export default opFX65;
