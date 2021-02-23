import axios from '@services/AxiosService';
import { CreatePlaylist } from '@entities/CreatePlaylist';
import { IPlaylistService } from '@services/IPlaylistService';
import { Response } from 'express';
import { AddPlaylistItems } from '@entities/AddPlaylistItems';
import { GetPlaylistItems } from '@entities/GetPlaylistItems';
export class PlaylistServiceImpl implements IPlaylistService {
  async createPlaylist(createPlaylist: CreatePlaylist): Promise<Response> {
    try {
      const { params } = createPlaylist.getParams();
      const response = await axios.post(
        createPlaylist.getUrl(),
        params,
        createPlaylist.getHeaders()
      );
      return response.data;
    } catch (e) {
      throw Error(e);
    }
  }
  async addPlaylistItems(
    addPlaylistItems: AddPlaylistItems
  ): Promise<Response> {
    try {
      const { params } = addPlaylistItems.getParams();
      const response = await axios.post(
        addPlaylistItems.getUrl(),
        params.uris,
        addPlaylistItems.getHeaders()
      );
      return response.data;
    } catch (e) {
      throw Error(e);
    }
  }

  async getPlaylistItems(
    getPlaylistItems: GetPlaylistItems
  ): Promise<Response> {
    try {
      const params = getPlaylistItems.getParams();
      const { headers } = getPlaylistItems.getHeaders();
      const response = await axios.get(getPlaylistItems.getUrl(), {
        params,
        headers,
      });
      return response.data;
    } catch (e) {
      throw Error(e);
    }
  }
}
