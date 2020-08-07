import produce from '../utils/produce';
import { getX, getKK } from '../utils/bit';

const op6XKK = produce(state => {
  const X = getX(state.OPCODE);
  const KK = getKK(state.OPCODE);

  state.V[X] = KK;
});

export default op6XKK;
