import { ITokenService } from '@services/ITokenService';
import { Token } from 'src/entities/Token';
import GetStreamingServiceToken from '@entities/GetStreamingServiceToken';
export class GetTokenUseCase {
  private tokenService: ITokenService;

  constructor(tokenService: ITokenService) {
    this.tokenService = tokenService;
  }

  async execute(
    getStreamingServiceToken: GetStreamingServiceToken
  ): Promise<Token> {
    return await this.tokenService.getToken(getStreamingServiceToken);
  }
}
