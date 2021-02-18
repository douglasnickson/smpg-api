import { PlaylistServiceImpl } from '@services/implementations/PlaylistServiceImpl';
import { AddPlaylistItemController } from './AddPlaylistItemController';
import { AddPlaylistItemUseCase } from './AddPlaylistItemsUseCase';

const playlistServiceImpl = new PlaylistServiceImpl();
const addPlaylistItemUseCase = new AddPlaylistItemUseCase(playlistServiceImpl);
const addPlaylistItemController = new AddPlaylistItemController(
  addPlaylistItemUseCase
);

export { addPlaylistItemController };
