import produce from '../utils/produce';
import { getKK, getX } from '../utils/bit';

const op3XKK = produce(state => {
  const X = getX(state.OPCODE);
  const KK = getKK(state.OPCODE);

  state.PC = state.V[X] === KK ? state.PC + 2 : state.PC;
});

export default op3XKK;
