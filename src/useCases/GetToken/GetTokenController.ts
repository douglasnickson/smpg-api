import { StreamingServiceTokenAbstract } from '@entities/StreamingServiceTokenAbstract';
import { Request, Response } from 'express';
import { GetTokenUseCase } from '@useCases/GetToken/GetTokenUseCase';
import { SpotifyToken } from '@entities/SpotifyToken';
import { Token } from '@entities/Token';
export class GetTokenController {
  constructor(private getToken: GetTokenUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const spotify: StreamingServiceTokenAbstract = new SpotifyToken(
      request.body
    );
    try {
      const token: Token = await this.getToken.execute(spotify);
      return response.status(200).send(token);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
