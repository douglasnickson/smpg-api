import { BrowseDTO } from '@useCases/Browse/BrowseDTO';
import { AxiosRequestConfig } from 'axios';
import { Utils } from 'src/utils/Utils';
import { URLSearchParams } from 'url';

export class Browse {
  public token: string;
  public country: string;
  public locale: string;
  public limit: number;
  public offset: number;
  public categoryId: string;
  private headers: AxiosRequestConfig;
  private params: URLSearchParams;

  constructor(props: BrowseDTO) {
    Object.assign(this, props);
    this.setParams();
  }

  public getUrl(): string {
    const url = process.env.API_URL_SPOTIFY;
    if (this.categoryId) {
      return url + '/browse/categories/' + this.categoryId + '/playlists';
    }
    return url + '/browse/categories';
  }

  public setHeaders(headers: AxiosRequestConfig): void {
    this.headers = headers;
  }

  public getHeaders(): AxiosRequestConfig {
    return this.headers;
  }

  setParams(): void {
    const params = new URLSearchParams();
    params.append('country', this.country);
    params.append('locale', this.locale);
    params.append('limit', String(this.limit));
    params.append('offset', String(this.offset));
    this.params = params;
  }

  getParams(): URLSearchParams {
    return this.params;
  }

  isLimitValid(): boolean {
    const utils = new Utils();
    return utils.isAttributeRangeValid(this.limit, 0, 50);
  }

  isOffsetValid(): boolean {
    const utils = new Utils();
    return utils.isAttributeRangeValid(this.limit, -1, 1000);
  }
}
