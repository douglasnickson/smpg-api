import { HeadersRequest } from '@entities/HeadersRequest';
import { Search } from '@entities/Search';
import { ISearchService } from '@services/ISearchService';
import { Response } from 'express';
import { SearchDTO } from './SearchDTO';

export class SearchUseCase {
  constructor(private searchService: ISearchService) {}

  async execute(searchDTO: SearchDTO): Promise<Response> {
    if (Object.keys(searchDTO).length === 0) {
      throw Error('Search params cannot be empty.');
    }

    const search = new Search(searchDTO);
    const header = new HeadersRequest(search.token);
    search.setHeaders(header.getJsonHeader());

    if (!search.isLimitValid()) {
      throw Error('Limit not valid. Minimum: 1 and Maximum: 50');
    }

    if (!search.isOffsetValid()) {
      throw Error('Offset not valid. Minimum: 0 and Maximum: 1000');
    }
    return await this.searchService.search(search);
  }
}
