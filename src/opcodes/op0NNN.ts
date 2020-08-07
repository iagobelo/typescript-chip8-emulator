import produce from '../utils/produce';
import { getNNN } from '../utils/bit';

const op0NNN = produce(state => {
  state.I = getNNN(state.OPCODE);
});

export default op0NNN;
