import { AddPlaylistItemsDTO } from '@useCases/AddPlaylistItems/AddPlaylistItemsDTO';
import { AxiosRequestConfig } from 'axios';

export class AddPlaylistItems {
  public token: string;
  public playlistId: string;
  public position: string;
  public uris: string;
  private headers: AxiosRequestConfig;
  private params: AxiosRequestConfig;

  constructor(addPlaylistItem: AddPlaylistItemsDTO) {
    Object.assign(this, addPlaylistItem);
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

  private setParams(params: AxiosRequestConfig): void {
    this.params = params;
  }

  public getParams(): AxiosRequestConfig {
    const uris = [];
    const requestUris: string[] = this.uris.split(',');
    for (const uri in requestUris) {
      uris.push(requestUris[uri]);
    }
    const params = {
      params: {
        uris: uris,
      },
    };
    return params;
  }
}
