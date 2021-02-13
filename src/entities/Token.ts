export class Token {

  public accessToken: string;
  public tokenType: string;
  public expiresIn: string;
  public refreshToken: string;
  public scope: string;

  constructor (props: Token) {
    this.accessToken = props.accessToken;
    this.tokenType = props.tokenType;
    this.expiresIn = props.expiresIn;
    this.refreshToken = props.refreshToken;
    this.scope = props.scope;
  }
}
