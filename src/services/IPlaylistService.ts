import { CreatePlaylist } from '@entities/CreatePlaylist';
import { Response } from 'express';

export interface IPlaylistService {
  createPlaylist(playlist: CreatePlaylist): Promise<Response>;
}
