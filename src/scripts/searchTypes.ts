import type { ImgHTMLAttributes } from "@astrojs/image/components";
import type { GetPictureResult } from "@astrojs/image/dist/lib/get-picture";

export interface SearchItem {
  name: String;
  slug: String;
  trueSlug: String;
  image: String | ImgHTMLAttributes | GetPictureResult;
  rarity: Number;
}
