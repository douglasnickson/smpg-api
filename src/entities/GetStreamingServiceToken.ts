import { URLSearchParams } from 'url';
import { AxiosRequestConfig } from 'axios';
import { Request } from 'express';

export default abstract class StreamingServiceTokenAbstract {
  public url: string;
  public params: URLSearchParams;
  public headers: AxiosRequestConfig;

  constructor(url: string, headers: AxiosRequestConfig) {
    this.url = url;
    this.headers = headers;
  }

  abstract parseParams(request: Request): URLSearchParams;
  setParams(params: URLSearchParams): void {
    this.params = params;
  }
}
