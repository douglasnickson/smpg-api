export interface GetTokenRequestDTO {
  clientId: string;
  clientSecret: string;
  grantType: string;
  redirectUri: string;
  code: string;
}
