import { Request } from 'express';
import { URLSearchParams } from 'url';
import { StreamingServiceTokenAbstract } from './StreamingServiceTokenAbstract';
export class SpotifyToken extends StreamingServiceTokenAbstract {
  constructor(request: Request) {
    super();
    super.setParams(this.parseParams(request));
    super.setUrl(this.parseUrl());
  }

  parseUrl(): string {
    return process.env.TOKEN_URL_SPOTIFY;
  }

  parseParams(request: Request): URLSearchParams {
    const params = new URLSearchParams();
    const {
      clientId,
      clientSecret,
      grantType,
      redirectUri,
      code,
    } = request.body;

    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('grant_type', grantType);
    params.append('redirect_uri', redirectUri);
    params.append('code', code);
    return params;
  }
}
