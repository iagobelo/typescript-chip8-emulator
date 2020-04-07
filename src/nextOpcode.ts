import { produce } from './utils';

const fetchOpcode = produce(state => {
  state.OPCODE += 2;
});

export default fetchOpcode;
