enum EnumStatus {
  Pending = 1,
  Processing,
  Rejected,
  Active,
  Disabled,
}

const isPending = (statusType: EnumStatus): boolean => statusType === EnumStatus.Pending;
const isProcessing = (statusType: EnumStatus): boolean => statusType === EnumStatus.Processing;
const isRejected = (statusType: EnumStatus): boolean => statusType === EnumStatus.Rejected;
const isActive = (statusType: EnumStatus): boolean => statusType === EnumStatus.Active;
const isDisabled = (statusType: EnumStatus): boolean => statusType === EnumStatus.Disabled;

export default {
  EnumStatus,
  isPending,
  isActive,
  isDisabled,
  isProcessing,
  isRejected,
}
