import { produce } from './utils';

const decodeOpcode = produce(state => {
  state.OPCODE = state.OPCODE & 0xf000;
});

export default decodeOpcode;
