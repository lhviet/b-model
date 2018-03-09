import {EGender} from '../enums';

export function isNoAnwser(gender: EGender): boolean {
  return gender === EGender.NA;
}
export function isMale(gender: EGender): boolean {
  return gender === EGender.Male;
}
export function isFemale(gender: EGender): boolean {
  return gender === EGender.Female;
}
export function isLGBT(gender: EGender): boolean {
  return gender === EGender.LGBT;
}

export function getEGenderString(gender: EGender): string {
  switch (gender) {
    case EGender.Male:
      return 'Male';
    case EGender.Female:
      return 'Female';
    case EGender.LGBT:
      return 'LGBT';
    case EGender.NA:
    default:
      return 'User';
  }
}
