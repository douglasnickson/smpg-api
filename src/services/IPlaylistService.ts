import { AddPlaylistItem } from '@entities/AddPlaylistItem';
import { CreatePlaylist } from '@entities/CreatePlaylist';
import { Response } from 'express';

export interface IPlaylistService {
  createPlaylist(createPlaylist: CreatePlaylist): Promise<Response>;
  addPlaylistItem(addPlaylistItem: AddPlaylistItem): Promise<Response>;
}
