import axios from '@services/AxiosService';
import { Browse } from '@entities/Browse';
import { IBrowseService } from '@services/IBrowseService';
import { Response } from 'express';

export class BrowseServiceImpl implements IBrowseService {
  async categories(Browse: Browse): Promise<Response> {
    try {
      const url = Browse.getUrl();
      const params = Browse.getParams();
      const { headers } = Browse.getHeaders();
      const response = await axios.get(url, {
        params: params,
        headers: headers,
      });
      return response.data;
    } catch (e) {
      throw Error(e);
    }
  }

  async playlists(Browse: Browse): Promise<Response> {
    try {
      const url = Browse.getUrl();
      const params = Browse.getParams();
      const { headers } = Browse.getHeaders();
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
