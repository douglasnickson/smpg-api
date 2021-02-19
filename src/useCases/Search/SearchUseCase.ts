import { HeadersRequest } from '@entities/HeadersRequest';
import Search from '@entities/Search';
import { ISearchService } from '@services/ISearchService';
import { Response } from 'express';
import { SearchDTO } from './SearchDTO';

export class SearchUseCase {
  constructor(private searchService: ISearchService) {}

  async execute(searchDTO: SearchDTO): Promise<Response> {
    const search = new Search(searchDTO);
    const header = new HeadersRequest(search.token);
    search.setHeaders(header.getJsonHeader());

    if (!search.isLimitValid()) {
      throw Error('Limit is not valid, Minimum: 1 and Maximum: 50');
    }

    if (!search.isOffsetValid()) {
      throw Error('Offset is not valid, Minimum: 0 and Maximum: 1000');
    }

    return await this.searchService.search(search);
  }
}
