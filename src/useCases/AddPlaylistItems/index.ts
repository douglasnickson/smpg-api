import { PlaylistServiceImpl } from '@services/implementations/PlaylistServiceImpl';
import { AddPlaylistItemsController } from './AddPlaylistItemsController';
import { AddPlaylistItemsUseCase } from './AddPlaylistItemsUseCase';

const playlistServiceImpl = new PlaylistServiceImpl();
const addPlaylistItemUseCase = new AddPlaylistItemsUseCase(playlistServiceImpl);
const addPlaylistItemsController = new AddPlaylistItemsController(
  addPlaylistItemUseCase
);

export { addPlaylistItemsController };
