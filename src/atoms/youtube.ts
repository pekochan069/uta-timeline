import { atom, computed } from "nanostores";

export const videoId = atom("");
export const youtubeUrl = computed(
  videoId,
  (id) => `https://www.youtube.com/watch?v=${id}`,
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const player = atom<any>(null);
export const playerReady = atom(false);
