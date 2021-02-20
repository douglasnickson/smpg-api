import { Request, Response } from 'express';
import { BrowseUserCase } from './BrowseUserCase';

export class BrowseController {
  constructor(private browse: BrowseUserCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.browse.execute(request.body);
      return response.status(200).json(data);
    } catch (e) {
      return response.status(400).json({
        message: e.message || 'Unexpected error',
      });
    }
  }
}
