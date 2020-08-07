import produce from '../utils/produce';
import { getNNN } from '../utils/bit';

const op2NNN = produce(state => {
  // TODO: Verify the order of actions
  state.SP = state.SP + 1;
  state.STACK[state.SP] = state.PC;
  state.PC = getNNN(state.OPCODE);
});

export default op2NNN;
