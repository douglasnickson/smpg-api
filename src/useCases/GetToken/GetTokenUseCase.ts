import { ITokenService } from '@services/ITokenService';
import { Token } from 'src/entities/Token';
import { StreamingServiceTokenAbstract } from '@entities/StreamingServiceTokenAbstract';
export class GetTokenUseCase {
  private tokenService: ITokenService;

  constructor(tokenService: ITokenService) {
    this.tokenService = tokenService;
  }

  async execute(
    streamingServiceTokenAbstract: StreamingServiceTokenAbstract
  ): Promise<Token> {
    return await this.tokenService.getToken(streamingServiceTokenAbstract);
  }
}
