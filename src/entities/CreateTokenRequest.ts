import { AxiosRequestConfig } from 'axios';

interface IProcessEnv {
  [name: string]: string | undefined;
}

interface IHeaderValue {
  headers: { 'Content-Type': string };
}

interface IHeaderType {
  [name: string]: IHeaderValue;
}

type StreamingProvier = 'spotify' | 'deezer';

export default class StreamingTokenCreateRequest {
  private streamingProvier: StreamingProvier;
  private streamingUrl: IProcessEnv;
  private streamingHeaders: IHeaderType = {
    ['spotify']: {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    },
  };

  constructor(streamingProvider: StreamingProvier) {
    this.streamingProvier = streamingProvider;
  }

  public getUrl(): string {
    const provider = `${
      'TOKEN_URL' + '_' + this.streamingProvier.toUpperCase()
    }`;
    return process.env[provider];
  }

  public getHeaders(): AxiosRequestConfig {
    const provider: string = this.streamingProvier;
    const header = this.streamingHeaders[provider];

    return header;
  }
}
