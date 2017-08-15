export interface IBMUser {

  keyid: string;

  value: {
    username: string,
    email: string,
    password?: string,
    status: string,
    role: string,
    updated_at: number,
    created_at: number,
  };

}
