import { PlaylistServiceImpl } from '@services/implementations/PlaylistServiceImpl';
import { CreatePlaylistUseCase } from './CreatePlaylistUseCase';
import { CreatePlaylistController } from './CreatePlaylistController';

const playlistServiceImpl = new PlaylistServiceImpl();
const createPlaylistUseCase = new CreatePlaylistUseCase(playlistServiceImpl);
const createPlaylistController = new CreatePlaylistController(
  createPlaylistUseCase
);

export { createPlaylistController };
