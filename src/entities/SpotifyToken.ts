import { Request } from 'express';
import { URLSearchParams } from 'url';
import GetStreamingServiceToken from './GetStreamingServiceToken';
import CreateTokenRequest from './CreateTokenRequest';

export class SpotifyToken extends GetStreamingServiceToken {
  public params: URLSearchParams;

  constructor(request: Request) {
    const createTokenRequest = new CreateTokenRequest('spotify');
    super(createTokenRequest.getUrl(), createTokenRequest.getHeaders());
    super.setParams(this.parseParams(request));
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
