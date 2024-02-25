export const getVideoId = (link: string) => {
  const regex =
    /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
  const videoId = regex.exec(link);

  return videoId?.[3] ?? "";
};
