import produce from './utils/produce';

const decodeOpcode = produce(state => {
  state.OPCODE = state.OPCODE & 0xf000;
});

export default decodeOpcode;
