import { URLSearchParams } from 'url';
import { GetToken } from "./GetToken";

export class Params {

  public data: GetToken;

  constructor(data: GetToken) {
    this.data = data;
  }

  public getParams(): URLSearchParams {
    const params = new URLSearchParams();
    params.append('client_id', this.data.clientId);
    params.append('client_secret', this.data.clientSecret);
    params.append('grant_type', this.data.grantType);
    params.append('redirect_uri', this.data.redirectUri);
    params.append('code', this.data.code);
    return params;
  }
}
