import axios from '@services/AxiosService';
import { CreatePlaylist } from '@entities/CreatePlaylist';
import { IPlaylistService } from '@services/IPlaylistService';
import { Response } from 'express';
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
}
