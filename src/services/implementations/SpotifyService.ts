require('dotenv/config');

import axios from '@services/AxiosService';
import { URLSearchParams } from 'url';
import { ITokenService } from "@services/ITokenService";
import { Token } from "src/entities/Token";
import { AxiosRequestConfig } from 'axios';

export class SpotifyService implements ITokenService {

  async getToken(url: string, data: URLSearchParams, headers: AxiosRequestConfig): Promise<Token> {
    try {
      const response = await axios.post(url, data, headers);

      const accessToken = response.data.access_token;
      const tokenType = response.data.token_type;
      const expiresIn = response.data.expires_in;
      const refreshToken = response.data.refresh_token;
      const scope = response.data.scope;

      const token = new Token({
        accessToken,
        tokenType,
        expiresIn,
        refreshToken,
        scope
      });

      return token;

    } catch (e) {
      throw Error (e.response.data.error_description);
    }
  }
}
