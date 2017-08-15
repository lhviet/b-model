export class Gender {
  static list = {
    noanswer: {
      code: 'noanswer',
      label: 'No Answer'
    },
    male: {
      code: 'male',
      label: 'Male'
    },
    female: {
      code: 'female',
      label: 'Female'
    },
    lgbt: {
      code: 'lgbt',
      label: 'LGBT'
    }
  };

  static getGenderLabel = (gender_code): string => Gender.list[gender_code].label;
}
