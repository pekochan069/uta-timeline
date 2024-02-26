import { atom, computed } from "nanostores";

export const videoId = atom("");
export const youtubeUrl = computed(
  videoId,
  (id) => `https://www.youtube.com/watch?v=${id}`,
);
