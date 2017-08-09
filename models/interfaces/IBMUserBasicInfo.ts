export interface IBMUserBasicInfo {

  keyid: string;

  value: {
    update_from_provider: string,
    displayname: string,
    firstname: string,
    lastname: string,
    middlename: string,
    avatar_url: string,
    cover_url: string,
    home_url: string,
    gender: string,
    birthday: string,
    language: string,
    country: string,
    timezone: string,
    quote: string,
    updated_at: number,
  };

}
