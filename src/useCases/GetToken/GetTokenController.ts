import { Response } from 'express';
import { GetTokenUseCase } from '@useCases/GetToken/GetTokenUseCase';
import GetStreamingServiceToken from '@entities/GetStreamingServiceToken';
export class GetTokenController {
  constructor(private getToken: GetTokenUseCase) {}

  async handle(
    response: Response,
    streamingService: GetStreamingServiceToken
  ): Promise<Response> {
    try {
      await this.getToken.execute(streamingService);
      return response.status(200).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
