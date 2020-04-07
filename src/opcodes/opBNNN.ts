import { produce } from '../utils';

const opBNNN = produce(state => {
  const NNN = state.OPCODE & 0x0fff;

  state.PC = state.V[0] + NNN;
});

export default opBNNN;
