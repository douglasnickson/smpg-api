import { URLSearchParams } from 'url';
import { AxiosRequestConfig } from 'axios';
import { GetTokenDTO } from '@useCases/GetToken/GetTokenDTO';

export abstract class StreamingServiceTokenAbstract {
  public url: string;
  public params: URLSearchParams;

  abstract parseParams(props: GetTokenDTO): URLSearchParams;
  abstract parseUrl(): string;

  public setParams(params: URLSearchParams): void {
    this.params = params;
  }

  public setUrl(url: string): void {
    this.url = url;
  }

  public getFormHeader(): AxiosRequestConfig {
    const headers = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    return headers;
  }
}
