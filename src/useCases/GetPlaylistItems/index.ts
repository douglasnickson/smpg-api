import { PlaylistServiceImpl } from '@services/implementations/PlaylistServiceImpl';
import { GetPlaylistItemsController } from './GetPlaylistItemsController';
import { GetPlaylistItemsUseCase } from './GetPlaylistItemsUseCase';

const playlistServiceImpl = new PlaylistServiceImpl();
const getPlaylistItemUseCase = new GetPlaylistItemsUseCase(playlistServiceImpl);
const getPlaylistItemsController = new GetPlaylistItemsController(
  getPlaylistItemUseCase
);

export { getPlaylistItemsController };
