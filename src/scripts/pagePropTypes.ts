import type { GetPictureResult } from "@astrojs/image/dist/lib/get-picture";
import type { OperatorTypes } from "./operatorTypes";
import type { FilteredSkins } from "./skinTypes";

export interface Params {
  slug: String;
}

export interface Props {
  technicalName: string;
  operator: OperatorTypes;
  elites: PictureObjects;
  skins: FilteredSkins;
  images: Images;
}

export interface Images {
  character: { [index: string]: CharacterImage };
  faction: GetPictureResult | null;
}

export interface CharacterImage {
  optimal: GetPictureResult;
  original: String;
}

export interface PictureObjects {
  [key: string]: GetPictureResult;
}
