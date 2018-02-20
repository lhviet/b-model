export class BQuery {

  static REGEX_SEARCH_SPLIT = /('.*?'|".*?"|\S+)/g;

  static QUERY = {
    keyid: 'kid',
    search: 's',
    language: 'lang',
    offset: 'off',
    limit: 'lim',
    sorter: 'sr',
    direct: 'dir',
  };

  /**
   * Return a search string to use in SQL search
   * input: This is "a group" of 'test text' to search
   * output: %This%is%a group%of%test text%to%search
   * @param {string} searchText
   * @returns {string}
   */
  static getOrderedQuerySearchString(searchText: string): string {
    const phrases = searchText.split(BQuery.REGEX_SEARCH_SPLIT);
    let queryString = '';
    phrases.map(item => {
      item = item.trim();
      if ((item.startsWith('"') && item.endsWith('"'))
        || (item.startsWith('\'') && item.endsWith('\''))) {
        item = item.substring(1, item.length - 1);
      }
      if (item.trim().length > 0) {
        queryString += item + '%';
      }
    });
    if (queryString.length > 0) {
      queryString = '%' + queryString;
    }
    return queryString;
  }

  /**
   * Return a search array to use in SQL search
   * input: This is "a group" of 'test text' to search
   * output: ["%This%", "%is%", "%a group%", "%of%", "%test text%", "%to%", "%search%"]
   * @param {string} searchText
   * @returns {string[]}
   */
  static getQuerySearchArray(searchText: string): string[] {
    const phrases = searchText.split(BQuery.REGEX_SEARCH_SPLIT);
    const queryArray: string[] = [];
    phrases.map(item => {
      item = item.trim();
      if ((item.startsWith('"') && item.endsWith('"'))
        || (item.startsWith('\'') && item.endsWith('\''))) {
        item = item.substring(1, item.length - 1);
      }
      if (item.trim().length > 0) {
        queryArray.push(`%${item}%`);
      }
    });
    return queryArray;
  }
}
