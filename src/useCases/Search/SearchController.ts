import { Request, Response } from 'express';
import { SearchUseCase } from './SearchUseCase';

export class SearchController {
  constructor(private search: SearchUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.search.execute(request.body);
      return response.status(200).json(data);
    } catch (e) {
      return response.status(400).json({
        message: e.message || 'Unexpected error',
      });
    }
  }
}
