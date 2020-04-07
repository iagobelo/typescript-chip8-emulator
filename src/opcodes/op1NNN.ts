import { produce } from '../utils';

const op1NNN = produce(state => {
  state.PC = state.OPCODE & 0x0fff;
});

export default op1NNN;
