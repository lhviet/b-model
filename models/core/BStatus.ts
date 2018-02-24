
module BStatus {
  export const enum EnumStatus {
    Pending = 1,
    Processing,
    Rejected,
    Active,
    Disabled,
  }

  export function isPending(statusType: EnumStatus): boolean {
    return statusType === EnumStatus.Pending;
  }
  export function isProcessing(statusType: EnumStatus): boolean {
    return statusType === EnumStatus.Processing;
  }
  export function isRejected(statusType: EnumStatus): boolean {
    return statusType === EnumStatus.Rejected;
  }
  export function isActive(statusType: EnumStatus): boolean {
    return statusType === EnumStatus.Active;
  }
  export function isDisabled(statusType: EnumStatus): boolean {
    return statusType === EnumStatus.Disabled;
  }

  export function getEString(e: EnumStatus): string {
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
        return '';
    }
  };
}


export default BStatus;
