export interface OperatorTypes {
  name:                       string;
  description:                string;
  canUseGeneralPotentialItem: boolean;
  potentialItemId:            string;
  nationId:                   string;
  groupId:                    null;
  teamId:                     null;
  displayNumber:              string;
  tokenKey:                   null;
  appellation:                string;
  position:                   string;
  tagList:                    string[];
  itemUsage:                  string;
  itemDesc:                   string;
  itemObtainApproach:         string;
  isNotObtainable:            boolean;
  isSpChar:                   boolean;
  maxPotentialLevel:          number;
  rarity:                     number;
  profession:                 string;
  subProfessionId:            string;
  trait:                      Trait;
  phases:                     Phase[];
  skills:                     Skill[];
  talents:                    Talent[];
  potentialRanks:             PotentialRank[];
  favorKeyFrames:             KeyFrame[];
  allSkillLvlup:              AllSkillLvlup[];
}

export interface AllSkillLvlup {
  unlockCond: UnlockCond;
  lvlUpCost:  Cost[];
}

export interface Cost {
  id:    string;
  count: number;
  type:  Type;
}

export enum Type {
  Material = "MATERIAL",
}

export interface UnlockCond {
  phase: number;
  level: number;
}

export interface KeyFrame {
  level: number;
  data:  Data;
}

export interface Data {
  maxHp:            number;
  atk:              number;
  def:              number;
  magicResistance:  number;
  cost:             number;
  blockCnt:         number;
  moveSpeed:        number;
  attackSpeed:      number;
  baseAttackTime:   number;
  respawnTime:      number;
  hpRecoveryPerSec: number;
  spRecoveryPerSec: number;
  maxDeployCount:   number;
  maxDeckStackCnt:  number;
  tauntLevel:       number;
  massLevel:        number;
  baseForceLevel:   number;
  stunImmune:       boolean;
  silenceImmune:    boolean;
  sleepImmune:      boolean;
  frozenImmune:     boolean;
}

export interface Phase {
  characterPrefabKey:  string;
  rangeId:             string;
  maxLevel:            number;
  attributesKeyFrames: KeyFrame[];
  evolveCost:          Cost[] | null;
}

export interface PotentialRank {
  type:           number;
  description:    string;
  buff:           Buff | null;
  equivalentCost: null;
}

export interface Buff {
  attributes: Attributes;
}

export interface Attributes {
  abnormalFlags:        null;
  abnormalImmunes:      null;
  abnormalAntis:        null;
  abnormalCombos:       null;
  abnormalComboImmunes: null;
  attributeModifiers:   AttributeModifier[];
}

export interface AttributeModifier {
  attributeType:                  number;
  formulaItem:                    number;
  value:                          number;
  loadFromBlackboard:             boolean;
  fetchBaseValueFromSourceEntity: boolean;
}

export interface Skill {
  skillId:           string;
  overridePrefabKey: null;
  overrideTokenKey:  null;
  levelUpCostCond:   LevelUpCostCond[];
  unlockCond:        UnlockCond;
}

export interface LevelUpCostCond {
  unlockCond:  UnlockCond;
  lvlUpTime:   number;
  levelUpCost: Cost[];
}

export interface Talent {
  candidates: TalentCandidate[];
}

export interface TalentCandidate {
  unlockCondition:       UnlockCond;
  requiredPotentialRank: number;
  prefabKey:             string;
  name:                  string;
  description:           string;
  rangeId:               null;
  blackboard:            Blackboard[];
}

export interface Blackboard {
  key:   string;
  value: number;
}

export interface Trait {
  candidates: TraitCandidate[];
}

export interface TraitCandidate {
  unlockCondition:       UnlockCond;
  requiredPotentialRank: number;
  blackboard:            Blackboard[];
  overrideDescripton:    null;
  prefabKey:             null;
  rangeId:               null;
}