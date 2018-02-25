export interface IBMUser {
    keyid: string;
    value: IBMUserValue;
}
export interface IBMUserValue {
    username: string;
    email: string;
    password?: string;
    status: string;
    role: string;
    updated_at: number;
    created_at: number;
}
