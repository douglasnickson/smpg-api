import { Token } from 'src/entities/Token';
import GetStreamingServiceToken from '@entities/GetStreamingServiceToken';
export interface ITokenService {
  getToken(getStreamingServiceToken: GetStreamingServiceToken): Promise<Token>;
}
