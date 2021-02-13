import { URLSearchParams } from 'url';
import { AxiosRequestConfig } from 'axios';
import { Token } from "src/entities/Token";

export interface ITokenService {
  getToken(url: string, data: URLSearchParams, headers: AxiosRequestConfig): Promise<Token>;
}
