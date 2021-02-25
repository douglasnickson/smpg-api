import { GetTokenDTO } from '@useCases/GetToken/GetTokenDTO';
import { URLSearchParams } from 'url';
import { StreamingServiceTokenAbstract } from './StreamingServiceTokenAbstract';
export class SpotifyToken extends StreamingServiceTokenAbstract {
  constructor(props: GetTokenDTO) {
    super();
    super.setParams(this.parseParams(props));
    super.setUrl(this.parseUrl());
  }

  parseUrl(): string {
    return process.env.TOKEN_URL_SPOTIFY;
  }

  parseParams(props: GetTokenDTO): URLSearchParams {
    const params = new URLSearchParams();

    params.append('client_id', props.clientId);
    params.append('client_secret', props.clientSecret);
    params.append('grant_type', props.grantType);
    params.append('redirect_uri', props.redirectUri);
    params.append('code', props.code);
    return params;
  }
}
