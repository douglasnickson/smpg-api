import { AxiosRequestConfig } from 'axios';

export class HeadersRequest {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  public getJsonHeader(): AxiosRequestConfig {
    const headers = {
      headers: {
        Authorization: `${'Bearer ' + this.token}`,
        'Content-Type': 'application/json',
      },
    };
    return headers;
  }

  public getFormHeader(): AxiosRequestConfig {
    const headers = {
      headers: {
        Authorization: `${'Bearer ' + this.token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    return headers;
  }
}
