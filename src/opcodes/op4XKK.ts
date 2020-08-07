import { getKK, getX } from '../utils/bit';
import produce from '../utils/produce';

const op4XKK = produce(state => {
  const X = getX(state.OPCODE);
  const KK = getKK(state.OPCODE);

  state.PC = state.V[X] !== KK ? state.PC + 2 : state.PC;
});

export default op4XKK;
