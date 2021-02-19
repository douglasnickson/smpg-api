import { Token } from 'src/entities/Token';
import { StreamingServiceTokenAbstract } from '@entities/StreamingServiceTokenAbstract';
export interface ITokenService {
  getToken(
    streamingServiceTokenAbstract: StreamingServiceTokenAbstract
  ): Promise<Token>;
}
