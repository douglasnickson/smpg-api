import { Search } from '@entities/Search';
import { Response } from 'express';

export interface ISearchService {
  search(search: Search): Promise<Response>;
}
