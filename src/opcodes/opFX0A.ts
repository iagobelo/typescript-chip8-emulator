import produce from '../utils/produce';
import { getX } from '../utils/bit';

const opFX0A = produce(state => {
  const X = getX(state.OPCODE) >> 8;

  if (state.KEY_PAD[0]) {
    state.V[X] = 0;
  } else if (state.KEY_PAD[1]) {
    state.V[X] = 1;
  } else if (state.KEY_PAD[2]) {
    state.V[X] = 2;
  } else if (state.KEY_PAD[3]) {
    state.V[X] = 3;
  } else if (state.KEY_PAD[4]) {
    state.V[X] = 4;
  } else if (state.KEY_PAD[5]) {
    state.V[X] = 5;
  } else if (state.KEY_PAD[6]) {
    state.V[X] = 6;
  } else if (state.KEY_PAD[7]) {
    state.V[X] = 7;
  } else if (state.KEY_PAD[8]) {
    state.V[X] = 8;
  } else if (state.KEY_PAD[9]) {
    state.V[X] = 9;
  } else if (state.KEY_PAD[10]) {
    state.V[X] = 10;
  } else if (state.KEY_PAD[11]) {
    state.V[X] = 11;
  } else if (state.KEY_PAD[12]) {
    state.V[X] = 12;
  } else if (state.KEY_PAD[13]) {
    state.V[X] = 13;
  } else if (state.KEY_PAD[14]) {
    state.V[X] = 14;
  } else if (state.KEY_PAD[15]) {
    state.V[X] = 15;
  } else {
    state.PC -= 2;
  }
});

export default opFX0A;
