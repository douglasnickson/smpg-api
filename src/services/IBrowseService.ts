import { Browse } from '@entities/Browse';
import { Response } from 'express';

export interface IBrowseService {
  categories(search: Browse): Promise<Response>;
}
