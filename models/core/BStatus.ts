
module BStatus {
  export enum EnumStatus {
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

  export const getEString = (eLocal: EnumStatus): string => EnumStatus[eLocal];
}


export default BStatus;
