import produce from '../utils/produce';
import { getNNN } from '../utils/bit';

const opANNN = produce(state => {
  state.I = getNNN(state.OPCODE);
});

export default opANNN;
