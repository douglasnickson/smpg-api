import Search from '@entities/Search';
import { ISearchService } from '@services/ISearchService';
import { Response } from 'express';
import { SearchDTO } from './SearchDTO';

export class SearchUseCase {
  constructor(private searchService: ISearchService) {}

  async execute(searchDTO: SearchDTO): Promise<Response> {
    const search = new Search(searchDTO);
    return await this.searchService.search(search);
  }
}
