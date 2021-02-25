require('dotenv/config');

import axios from '@services/AxiosService';
import { StreamingServiceTokenAbstract } from '@entities/StreamingServiceTokenAbstract';
import { ITokenService } from '@services/ITokenService';
import { Token } from '@entities/Token';

export class TokenServiceImpl implements ITokenService {
  async getToken(
    streamingServiceTokenAbstract: StreamingServiceTokenAbstract
  ): Promise<Token> {
    try {
      const response = await axios.post(
        streamingServiceTokenAbstract.url,
        streamingServiceTokenAbstract.params,
        streamingServiceTokenAbstract.getFormHeader()
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
      throw Error(e);
    }
  }
}
