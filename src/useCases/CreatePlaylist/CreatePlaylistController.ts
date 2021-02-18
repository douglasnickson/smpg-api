import { Request, Response } from 'express';
import { CreatePlaylistUseCase } from './CreatePlaylistUseCase';

export class CreatePlaylistController {
  constructor(private createPlaylist: CreatePlaylistUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.createPlaylist.execute(request.body);
      return response.status(200).json(data);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
