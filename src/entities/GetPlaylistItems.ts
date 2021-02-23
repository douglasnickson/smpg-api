import { GetPlaylistItemsDTO } from '@useCases/GetPlaylistItems/GetPlaylistItemsDTO';
import { AxiosRequestConfig } from 'axios';
import { URLSearchParams } from 'url';
import { Utils } from 'src/utils/Utils';

export class GetPlaylistItems {
  public token: string;
  public playlistId: string;
  public market: string;
  public fields: string;
  public limit: number;
  public offset: number;
  public additionalType: string;
  private headers: AxiosRequestConfig;
  private params: URLSearchParams;

  constructor(props: GetPlaylistItemsDTO) {
    Object.assign(this, props);
    this.setParams();
  }

  public getUrl(): string {
    return (
      process.env.API_URL_SPOTIFY + '/playlists/' + this.playlistId + '/tracks'
    );
  }

  public setHeaders(headers: AxiosRequestConfig): void {
    this.headers = headers;
  }

  public getHeaders(): AxiosRequestConfig {
    return this.headers;
  }

  private setParams(): void {
    const params = new URLSearchParams();
    params.append('market', this.market);
    params.append('fields', this.fields);
    params.append('limit', String(this.limit));
    params.append('offset', String(this.offset));
    params.append('additional_types', this.additionalType);
    this.params = params;
  }

  public getParams(): URLSearchParams {
    const utils = new Utils();
    const params = utils.getUrlParamsWithValue(this.params);
    return params;
  }
}
