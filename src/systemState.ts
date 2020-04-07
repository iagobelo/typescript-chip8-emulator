export type System = {
  OPCODE: number;
  MEMORY: Uint8Array;
  V: Uint8Array;
  I: number;
  PC: number;
  SP: number;
  STACK: Uint16Array;
  GFX: Uint8Array;
  KEY_PAD: Uint8Array;
  DELAY_TIMER: number;
  SOUND_TIMER: number;
  DRAW: boolean;
};

const state: System = {
  OPCODE: 0x200,
  MEMORY: new Uint8Array(4096),
  V: new Uint8Array(16),
  I: 0,
  PC: 0,
  SP: 0,
  STACK: new Uint16Array(16),
  GFX: new Uint8Array(2048),
  KEY_PAD: new Uint8Array(16),
  DELAY_TIMER: 0,
  SOUND_TIMER: 0,
  DRAW: false
};

export default state;
