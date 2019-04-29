import { MPTypes } from '../MPTypes';
import Gender = MPTypes.Gender;


export const isNoAnwser = (gender: Gender): boolean => gender === Gender.NA;
export const isMale = (gender: Gender): boolean => gender === Gender.Male;
export const isFemale = (gender: Gender): boolean => gender === Gender.Female;
export const isLGBT = (gender: Gender): boolean => gender === Gender.LGBT;

// enum Gender helper
export function getGenderString(gender: Gender): string {
  switch (gender) {
    case Gender.Male:
      return 'Male';
    case Gender.Female:
      return 'Female';
    case Gender.LGBT:
      return 'LGBT';
    case Gender.NA:
    default:
      return 'User';
  }
}
export const getGenderArr = (): Gender[] => [Gender.Male, Gender.Female, Gender.LGBT, Gender.NA];
