import produce from '../utils/produce';
import { getNNN } from '../utils/bit';

const op1NNN = produce(state => {
  state.PC = getNNN(state.OPCODE);
});

export default op1NNN;
