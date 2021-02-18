import { AddPlaylistItemUseCase } from './AddPlaylistItemsUseCase';
import { Request, Response } from 'express';

export class AddPlaylistItemController {
  constructor(private addPlaylistItemUseCase: AddPlaylistItemUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.addPlaylistItemUseCase.execute(request.body);
      return response.status(200).json(data);
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
