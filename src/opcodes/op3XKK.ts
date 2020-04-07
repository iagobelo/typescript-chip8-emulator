import { produce } from '../utils';

const op3XKK = produce(state => {
  const X = state.OPCODE & 0x0f00;
  const KK = state.OPCODE & 0x00ff;

  state.PC = state.V[X] === KK ? state.PC + 2 : state.PC;
});

export default op3XKK;
