import { produce } from '../utils';

const opANNN = produce(state => {
  const NNN = state.OPCODE & 0x0fff;

  state.I = NNN;
});

export default opANNN;
