import { produce } from '../utils';

const op2NNN = produce(state => {
  // TODO: Verify the order of actions
  state.SP = state.SP + 1;
  state.STACK[state.SP] = state.PC;
  state.PC = state.OPCODE & 0x0fff;
});

export default op2NNN;
