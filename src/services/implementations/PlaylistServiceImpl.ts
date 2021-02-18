import axios from '@services/AxiosService';
import { CreatePlaylist } from '@entities/CreatePlaylist';
import { IPlaylistService } from '@services/IPlaylistService';
import { Response } from 'express';
import { AddPlaylistItem } from '@entities/AddPlaylistItem';
export class PlaylistServiceImpl implements IPlaylistService {
  async createPlaylist(createPlaylist: CreatePlaylist): Promise<Response> {
    try {
      const { params } = createPlaylist.getParams();
      const response = await axios.post(
        createPlaylist.getUrl(),
        params.uris,
        createPlaylist.getHeaders()
      );
      return response.data;
    } catch (e) {
      throw Error(e);
    }
  }
  async addPlaylistItem(addPlaylistItem: AddPlaylistItem): Promise<Response> {
    try {
      const { params } = addPlaylistItem.getParams();
      const response = await axios.post(
        addPlaylistItem.getUrl(),
        params,
        addPlaylistItem.getHeaders()
      );
      return response.data;
    } catch (e) {
      throw Error(e);
    }
  }
}
