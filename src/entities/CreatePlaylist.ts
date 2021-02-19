import { CreatePlaylistDTO } from '@useCases/CreatePlaylist/CreatePlaylistDTO';
import { AxiosRequestConfig } from 'axios';

export class CreatePlaylist {
  public token: string;
  public userId: string;
  public name: string;
  public public: boolean;
  public collaborative: boolean;
  public description: string;
  private headers: AxiosRequestConfig;
  private params: AxiosRequestConfig;

  constructor(props: CreatePlaylistDTO) {
    Object.assign(this, props);
    this.setParams();
  }

  public getUrl(): string {
    return process.env.API_URL_SPOTIFY + '/users/' + this.userId + '/playlists';
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
        name: this.name,
        public: this.public,
        collaborative: this.collaborative,
        description: this.description,
      },
    };
  }
  public getParams(): AxiosRequestConfig {
    return this.params;
  }
}
