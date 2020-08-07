import produce from './utils/produce';

const fetchOpcode = produce(state => {
  state.OPCODE = (state.MEMORY[state.PC] << 8) | state.MEMORY[state.PC + 1];
});

export default fetchOpcode;
