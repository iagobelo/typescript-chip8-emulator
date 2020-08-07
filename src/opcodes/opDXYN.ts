import produce from '../utils/produce';
import { getX, getY, getN } from '../utils/bit';

const opDXYN = produce(state => {
  const X = getX(state.OPCODE) >> 8;
  const Y = getY(state.OPCODE) >> 4;
  const N = getN(state.OPCODE);

  for (let row = 0; row < N; row += 1) {
    const pixel = state.MEMORY[state.I + row];

    for (let col = 0; col < 8; col += 1) {
      if ((pixel & (0x80 >> row)) !== 0) {
        if (state.GFX[X + col + (Y + row) * 64] == 1) state.V[0xf] = 1;

        state.GFX[X + col + (Y + row) * 64] ^= 1;
      }
    }
  }

  state.DRAW = true;
});

export default opDXYN;
