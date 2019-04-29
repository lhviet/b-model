import {MPTypes} from '../MPTypes';
import PronunciationSystem = MPTypes.PronunciationSystem;

export const isIPA = (statusType: PronunciationSystem): boolean => statusType === PronunciationSystem.IPA;

// enum PronunciationSystem helper
export function getPronunciationSystemString(system: PronunciationSystem): string {
  if (system === PronunciationSystem.IPA) {
    return 'IPA';
  }

  return '';
}
export const getPronunciationSystemArr = (): PronunciationSystem[] => [PronunciationSystem.IPA];
