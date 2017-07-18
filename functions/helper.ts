import * as moment from "moment";

export class Helper {

  static parseArray(input: string): any[] {
    let result = [input];
    try {
      let tempStr = input.replace(/{/g, '[');
      tempStr = tempStr.replace(/}/g, ']');
      result = JSON.parse(tempStr);
    }
    catch (ex) {
      console.error('parseArray ERROR = ' + JSON.stringify(ex));
      console.error('parseArray ERROR input = ' + JSON.stringify(input));
    }
    return result;
  }

  static parseObject(input: string): {} {
    let result = {input};
    try {
      result = JSON.parse(input);
    }
    catch (ex) {
      console.error('parseObject ERROR = ' + JSON.stringify(ex));
      console.error('parseObject ERROR input = ' + JSON.stringify(input));
    }
    return result;
  }

  static getDatetime(timestamp: any) {
    let mom = moment.unix(timestamp);
    return mom.format("MMM Do, YYYY, h:mm a");
  }

  static getNumberOfPage(total: number, limit: number): number {
    let numberOfPage = 1;
    if (limit > 0 && total > limit) {
      numberOfPage = Math.floor(total / limit) + (total % limit > 0 ? 1 : 0);
    }
    return numberOfPage;
  }

  static getCurrentPage(total: number, limit: number, index: number): number {
    let currentPage = 1;
    if (index >= limit && index < total) {
      currentPage = Math.floor(index / limit) + 1;
    }
    else if (index >= total) {
      currentPage = Helper.getNumberOfPage(total, limit);
    }
    return currentPage;
  }

  static generateCustomUrl(customUrl: string): string {
    let newUrl = customUrl.toLowerCase().replace(/\s/g, '-');
    newUrl = newUrl.replace(/[^A-Za-z0-9-]/g, '').trim();
    return newUrl;
  }

}