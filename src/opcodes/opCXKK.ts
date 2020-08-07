import produce from '../utils/produce';
import { getX, getKK } from '../utils/bit';

const opCXKK = produce(state => {
  const X = getX(state.OPCODE) >> 8;
  const KK = getKK(state.OPCODE);
  const randomNumber = Math.floor(Math.random() * 256);

  state.V[X] = KK & randomNumber;
});

export default opCXKK;
