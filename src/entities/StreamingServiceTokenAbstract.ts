import { URLSearchParams } from 'url';
import { AxiosRequestConfig } from 'axios';
import { Request } from 'express';

export abstract class StreamingServiceTokenAbstract {
  public url: string;
  public params: URLSearchParams;

  abstract parseParams(request: Request): URLSearchParams;
  abstract parseUrl(): string;

  public setParams(params: URLSearchParams): void {
    this.params = params;
  }

  public setUrl(url: string): void {
    this.url = url;
  }

  public getJsonHeader(): AxiosRequestConfig {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return headers;
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