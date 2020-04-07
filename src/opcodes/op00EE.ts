import { produce } from '../utils';

const op00EE = produce(state => {
  --state.SP;
  state.PC = state.STACK[state.SP];
});

export default op00EE;
