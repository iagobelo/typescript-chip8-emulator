import { produce } from './utils';

const updateTimers = produce(state => {
  state.DELAY_TIMER =
    state.DELAY_TIMER > 0 ? state.DELAY_TIMER - 1 : state.DELAY_TIMER;
  state.SOUND_TIMER =
    state.SOUND_TIMER === 1 ? state.SOUND_TIMER - 1 : state.SOUND_TIMER;
});

export default updateTimers;
