import { VIMEO_REGEX, YOUTUBE_REGEX } from "@/constants/regex";
import { retrieveYoutubeId } from "./retrieveYoutubeId";
import { retrieveVimeoId } from "./retrieveVimeoId";

export function generateVideoEmbed(videoUrl: string) {
  if (YOUTUBE_REGEX.exec(videoUrl) !== null) {
    return `https://youtube.com/embed/${retrieveYoutubeId(videoUrl)}`;
  }
  if (VIMEO_REGEX.exec(videoUrl) !== null) {
    const vimeoId = retrieveVimeoId(videoUrl).split("/")[1];
    return `https://player.vimeo.com/video/${vimeoId}`;
  }
  return "";
}
