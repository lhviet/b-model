import {EPLocal} from '../enums';

export function isUS(statusType: EPLocal): boolean {
  return statusType === EPLocal.US;
}
export function isGB(statusType: EPLocal): boolean {
  return statusType === EPLocal.GB;
}
export function isAU(statusType: EPLocal): boolean {
  return statusType === EPLocal.AU;
}

export function getEPLocalString(e: EPLocal): string {
  switch (e) {
    case EPLocal.US:
      return 'US';
    case EPLocal.GB:
      return 'GB';
    case EPLocal.AU:
      return 'AU';
    default:
      return '';
  }
}
