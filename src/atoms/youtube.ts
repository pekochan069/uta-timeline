import { atom, computed } from "nanostores";

export const videoId = atom("");


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const player = atom<any>(null);
export const playerReady = atom(false);
