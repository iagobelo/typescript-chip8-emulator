import produce from '../utils/produce';
import { getNNN } from '../utils/bit';

const opBNNN = produce(state => {
  state.PC = state.V[0] + getNNN(state.OPCODE);
});

export default opBNNN;
