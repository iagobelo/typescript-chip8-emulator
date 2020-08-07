import produce from './utils/produce';

const fetchOpcode = produce(state => {
  state.OPCODE += 2;
});

export default fetchOpcode;
