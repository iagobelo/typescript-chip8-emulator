import { produce } from '../utils';

const opCXKK = produce(state => {
  const X = (state.OPCODE & 0x0f00) >> 8;
  const KK = state.OPCODE & 0x00ff;
  const randomNumber = Math.floor(Math.random() * 256);

  state.V[X] = KK & randomNumber;
});

export default opCXKK;
