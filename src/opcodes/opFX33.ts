import produce from '../utils/produce';
import { getX } from '../utils/bit';

const opFX33 = produce(state => {
  const X = getX(state.OPCODE) >> 8;
  const value = state.V[X];

  // TODO: check assignments
  // Ones-place
  state.MEMORY[state.I + 2] = value % 10;
  state.V[X] /= 10;

  // Tens-place
  state.MEMORY[state.I + 1] = value % 10;
  state.V[X] /= 10;

  // Hundreds-place
  state.MEMORY[state.I] = value % 10;
});

export default opFX33;
