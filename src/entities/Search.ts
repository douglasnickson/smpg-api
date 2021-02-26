import { AxiosRequestConfig } from 'axios';
import { SearchDTO } from '@useCases/Search/SearchDTO';
import { Utils } from '@utils/Utils';

export class Search {
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
    const utils = new Utils();
    return utils.getParamsWithValue(this.params);
  }

  isLimitValid(): boolean {
    const utils = new Utils();
    return utils.isAttributeRangeValid(this.limit, 0, 50);
  }

  isOffsetValid(): boolean {
    const utils = new Utils();
    return utils.isAttributeRangeValid(this.offset, -1, 1000);
  }
}
