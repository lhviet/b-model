export interface IBMUser {

  keyid: string;

  value: {
    username: string,
    email: string,
    password?: string,
    status: string,
    role: string,
    created_at: number,
  };

}
