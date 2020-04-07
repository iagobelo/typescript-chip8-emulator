import { produce } from '../utils';

const op0NNN = produce(state => {
  state.I = state.OPCODE & 0x0fff;
});

export default op0NNN;
