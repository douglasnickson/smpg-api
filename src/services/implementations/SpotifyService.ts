require('dotenv/config');

import axios from '@services/AxiosService';
import { ITokenService } from '@services/ITokenService';
import { Token } from 'src/entities/Token';
import GetStreamingServiceToken from '@entities/GetStreamingServiceToken';

export class SpotifyService implements ITokenService {
  async getToken(
    getStreamingServiceToken: GetStreamingServiceToken
  ): Promise<Token> {
    try {
      const response = await axios.post(
        getStreamingServiceToken.url,
        getStreamingServiceToken.params,
        getStreamingServiceToken.headers
      );

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
        scope,
      });

      return token;
    } catch (e) {
      throw Error(e.response.data.error_description);
    }
  }
}
