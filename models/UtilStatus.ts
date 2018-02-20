import {
  TYPE_STATUS, TYPE_STATUS_ACTIVE, TYPE_STATUS_DISABLED, TYPE_STATUS_PENDING, TYPE_STATUS_PROCESSING,
  TYPE_STATUS_REJECTED
} from './types/TStatus';

const isPending = (statusType: TYPE_STATUS): boolean => statusType === TYPE_STATUS_PENDING;
const isActive = (statusType: TYPE_STATUS): boolean => statusType === TYPE_STATUS_ACTIVE;
const isDisable = (statusType: TYPE_STATUS): boolean => statusType === TYPE_STATUS_DISABLED;
const isProcessing = (statusType: TYPE_STATUS): boolean => statusType === TYPE_STATUS_PROCESSING;
const isRejected = (statusType: TYPE_STATUS): boolean => statusType === TYPE_STATUS_REJECTED;

export {
  isPending,
  isActive,
  isDisable,
  isProcessing,
  isRejected,
}
