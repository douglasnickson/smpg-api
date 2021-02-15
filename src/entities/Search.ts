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
  private params: AxiosRequestConfig;

  constructor(props: SearchDTO) {
    Object.assign(this, props);
    this.setParams();
  }

  public getUrl(): string {
    return process.env.API_URL_SPOTIFY + '/search';
  }

  public getHeaders(): AxiosRequestConfig {
    const headers = {
      headers: {
        Authorization: `${'Bearer ' + this.token}`,
        'Content-Type': 'application/json',
      },
    };
    return headers;
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
}
