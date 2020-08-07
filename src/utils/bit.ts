export const getNNN = (opcode: number) => opcode & 0x0fff;

export const getX = (opcode: number) => opcode & 0x0f00;

export const getY = (opcode: number) => opcode & 0x00f0;

export const getN = (opcode: number) => opcode & 0x000f;

export const getKK = (opcode: number) => opcode & 0x00ff;
