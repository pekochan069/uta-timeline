import { computed } from "nanostores";

import { videoId } from "~/atoms/youtube";

const youtubeUrl = computed(
  videoId,
  (id) => `https://www.youtube.com/watch?v=${id}`,
);
