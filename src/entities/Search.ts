import { SearchDTO } from '@useCases/Search/SearchDTO';
import { AxiosRequestConfig } from 'axios';

export default class Search {
  public token: string;
  public q: string;
  public type: string;
  public market: string;
  public limit: number;
  public offset: number;
  public includeExternal: string;
  public operationType: string;
  private headers: AxiosRequestConfig;
  private params: AxiosRequestConfig;

  constructor(props: SearchDTO) {
    Object.assign(this, props);
    this.setParams();
    this.headers = {
      headers: {
        Authorization: `${'Bearer ' + this.token}`,
        'Content-Type': 'application/json',
      },
    };
  }

  public getUrl(): string {
    let url = process.env.API_URL_SPOTIFY;
    switch (this.operationType) {
      case 'album':
        url += '/artists/' + this.q + '/' + 'albums';
        break;
      case 'track':
        url += '/albums/' + this.q + '/' + 'tracks';
        break;
      default:
        url += '/search';
        break;
    }

    return url;
  }

  public setHeaders(headers: AxiosRequestConfig): void {
    this.headers = headers;
  }

  public getHeaders(): AxiosRequestConfig {
    return this.headers;
  }

  private setParams(): void {
    this.params = {
      params: {
        q: this.q,
        type: this.type,
        market: this.market,
        limit: this.limit,
        offset: this.offset,
        include_external: this.includeExternal,
      },
    };
  }

  getParams(): AxiosRequestConfig {
    const { params } = this.params;
    const objWithNoEmpyParams = { params: {} };

    for (const index in params) {
      if (params[index] !== undefined && params[index] !== '') {
        Object.assign(objWithNoEmpyParams.params, { [index]: params[index] });
      }
    }

    return objWithNoEmpyParams;
  }

  isLimitValid(): boolean {
    return this.limit > 0 && this.limit <= 50;
  }

  isOffsetValid(): boolean {
    return this.offset >= 0 && this.offset <= 1000;
  }
}
