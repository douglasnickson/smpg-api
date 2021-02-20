import axios from '@services/AxiosService';
import { Search } from '@entities/Search';
import { ISearchService } from '@services/ISearchService';
import { Response } from 'express';

export class SearchServiceImpl implements ISearchService {
  async search(search: Search): Promise<Response> {
    try {
      const url = search.getUrl();
      const { params } = search.getParams();
      const { headers } = search.getHeaders();
      const response = await axios.get(url, {
        params: params,
        headers: headers,
      });
      return response.data;
    } catch (e) {
      throw Error(e);
    }
  }
}
