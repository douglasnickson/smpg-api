import { GetPlaylistItemsUseCase } from './GetPlaylistItemsUseCase';
import { Request, Response } from 'express';

export class GetPlaylistItemsController {
  constructor(private getPlaylistItemsUseCase: GetPlaylistItemsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.getPlaylistItemsUseCase.execute(request.body);
      return response.status(200).json(data);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
