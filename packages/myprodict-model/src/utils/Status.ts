import {MPTypes} from '../MPTypes';
import Status = MPTypes.Status;

export const isPending = (status: Status): boolean => status === Status.Pending;
export const isProcessing = (status: Status): boolean => status === Status.Processing;
export const isRejected = (status: Status): boolean => status === Status.Rejected;
export const isActive = (status: Status): boolean => status === Status.Active;
export const isDisabled = (status: Status): boolean => status === Status.Disabled;

// enum Status helper
export function getStatusString(status: Status): string {
  switch (status) {
    case Status.Pending:
      return 'Pending';
    case Status.Processing:
      return 'Processing';
    case Status.Rejected:
      return 'Rejected';
    case Status.Active:
      return 'Active';
    case Status.Disabled:
      return 'Disabled';
    default:
      return '';
  }
}
export const getStatusArr = (): Status[] => [Status.Pending, Status.Processing, Status.Rejected, Status.Active, Status.Disabled];
