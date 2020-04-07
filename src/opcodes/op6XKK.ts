import { produce } from '../utils';

const op6XKK = produce(state => {
  const X = state.OPCODE & 0x0f00;
  const KK = state.OPCODE & 0x00ff;

  state.V[X] = KK;
});

export default op6XKK;
