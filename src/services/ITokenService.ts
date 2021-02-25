import { Token } from '@entities/Token';
import { StreamingServiceTokenAbstract } from '@entities/StreamingServiceTokenAbstract';
export interface ITokenService {
  getToken(
    streamingServiceTokenAbstract: StreamingServiceTokenAbstract
  ): Promise<Token>;
}
