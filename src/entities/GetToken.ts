import { URLSearchParams } from 'url';

export class GetToken {

  public clientId: string;
  public clientSecret: string;
  public grantType: string;
  public redirectUri: string;
  public code: string;

  constructor (props: GetToken) {
    this.clientId = props.clientId;
    this.clientSecret = props.clientSecret;
    this.grantType = props.grantType;
    this.redirectUri = props.redirectUri;
    this.code = props.code;
  }


}
