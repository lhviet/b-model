import {EStatus} from '../enums';

export function isPending(statusType: EStatus): boolean {
  return statusType === EStatus.Pending;
}
export function isProcessing(statusType: EStatus): boolean {
  return statusType === EStatus.Processing;
}
export function isRejected(statusType: EStatus): boolean {
  return statusType === EStatus.Rejected;
}
export function isActive(statusType: EStatus): boolean {
  return statusType === EStatus.Active;
}
export function isDisabled(statusType: EStatus): boolean {
  return statusType === EStatus.Disabled;
}

export function getEStatusString(e: EStatus): string {
  switch (e) {
    case EStatus.Pending:
      return 'Pending';
    case EStatus.Processing:
      return 'Processing';
    case EStatus.Rejected:
      return 'Rejected';
    case EStatus.Active:
      return 'Active';
    case EStatus.Disabled:
      return 'Disabled';
    default:
      return '';
  }
}
