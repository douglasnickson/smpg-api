export interface GetTokenDTO {
  clientId: string;
  clientSecret: string;
  grantType: string;
  redirectUri: string;
  code: string;
}
