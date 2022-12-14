// Filtered items interface. Use on the skin object to get types

export interface FilteredSkins {
  [key: string]: CharSkin;
}

// Generated interface. Use for calling skin_table.json

export interface SkinTable {
  charSkins:        { [key: string]: CharSkin };
  buildinEvolveMap: { [key: string]: CharEvolve };
}

export interface CharEvolve {
  "0": string;
  "1"?: string;
  "2"?: string;
}

export interface CharSkin {
  skinId:        string;
  charId:        string;
  tokenSkinMap:  null;
  illustId:      string;
  dynIllustId:   null;
  avatarId:      string;
  portraitId:    string;
  dynPortraitId: null;
  buildingId:    null | string;
  battleSkin:    BattleSkin;
  isBuySkin:     boolean;
  tmplId:        null | string;
  voiceId:       null;
  voiceType:     VoiceType;
  displaySkin:   DisplaySkin;
}

export interface BattleSkin {
  overwritePrefab: boolean;
  skinOrPrefabId:  null | string;
}

export interface DisplaySkin {
  skinName:           null | string;
  colorList:          string[];
  titleList:          string[];
  modelName:          string;
  drawerName:         string;
  skinGroupId:        string;
  skinGroupName:      string;
  skinGroupSortIndex: number;
  content:            string;
  dialog:             null | string;
  usage:              null | string;
  description:        null | string;
  obtainApproach:     null | string;
  sortId:             number;
  displayTagId:       null | string;
  getTime:            number;
  onYear:             number;
  onPeriod:           number;
}

export enum VoiceType {
  None = "NONE",
}
