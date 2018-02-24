
module BStatus {
  export const enum EnumStatus {
    Pending = 1,
    Processing,
    Rejected,
    Active,
    Disabled,
  }

  export const isPending = (statusType: EnumStatus): boolean => statusType === EnumStatus.Pending;
  export const isProcessing = (statusType: EnumStatus): boolean => statusType === EnumStatus.Processing;
  export const isRejected = (statusType: EnumStatus): boolean => statusType === EnumStatus.Rejected;
  export const isActive = (statusType: EnumStatus): boolean => statusType === EnumStatus.Active;
  export const isDisabled = (statusType: EnumStatus): boolean => statusType === EnumStatus.Disabled;

  export const getEString = (e: EnumStatus): string => {
    switch (e) {
      case EnumStatus.Pending:
        return 'Pending';
      case EnumStatus.Processing:
        return 'Processing';
      case EnumStatus.Rejected:
        return 'Rejected';
      case EnumStatus.Active:
        return 'Active';
      case EnumStatus.Disabled:
        return 'Disabled';
      default:
        return null;
    }
  };
}


export default BStatus;
