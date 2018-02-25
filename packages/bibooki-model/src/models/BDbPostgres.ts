
export class BDbPostgres {

  // condition key using for JSON condition format in request to convert to SQL in PostgreSQL in backend server
  static CONDITION_KEY = {
    IN_ARRAY: 'in_array',
    NOT_IN_ARRAY: 'not_in_array',
  };

  // retrieve the correct key using in SQL in PostgreSQL in backend
  static getConditionKey(key: string): string {
    let conditionKey = key;
    switch (key) {
      case BDbPostgres.CONDITION_KEY.IN_ARRAY:
        conditionKey = ' IN ';
        break;
      case BDbPostgres.CONDITION_KEY.NOT_IN_ARRAY:
        conditionKey = ' NOT IN ';
        break;
      default:
        break;
    }
    return conditionKey;
  }

  /**
   * parse array string in format "[abc, def, xyz,...]"
   * @param {string} input
   * @returns {any[]}
   */
  static parseArray(input: string): any[] {
    let result = [input];
    try {
      let tempStr = input.replace(/{/g, '[');
      tempStr = tempStr.replace(/}/g, ']');
      result = JSON.parse(tempStr);
    } catch (ex) {
      console.error('parseArray ERROR = ' + JSON.stringify(ex));
      console.error('parseArray ERROR input = ' + JSON.stringify(input));
      // throw ex;
    }
    return result;
  }

}
