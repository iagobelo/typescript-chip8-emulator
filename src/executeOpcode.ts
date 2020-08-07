import opcodes from './opcodes';
import produce from './utils/produce';

const executeOpcode = produce(state => {
  opcodes(state.OPCODE & 0x000f)(state);
  state.OPCODE += 2;
});

export default executeOpcode;
