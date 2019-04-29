import {MPTypes} from '../MPTypes';
import Local = MPTypes.Local;

export const isUS = (local: Local): boolean => local === Local.US;
export const isGB = (local: Local): boolean => local === Local.GB;
export const isAU = (local: Local): boolean => local === Local.AU;

// enum Local helper
export function getLocalString(e: Local): string {
  switch (e) {
    case Local.US:
      return 'US';
    case Local.GB:
      return 'GB';
    case Local.AU:
      return 'AU';
    default:
      return '';
  }
}
export const getLocalArr = (): Local[] => [Local.US, Local.GB, Local.AU];
