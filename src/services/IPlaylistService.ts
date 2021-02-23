import { AddPlaylistItems } from '@entities/AddPlaylistItems';
import { CreatePlaylist } from '@entities/CreatePlaylist';
import { GetPlaylistItems } from '@entities/GetPlaylistItems';
import { Response } from 'express';

export interface IPlaylistService {
  createPlaylist(createPlaylist: CreatePlaylist): Promise<Response>;
  addPlaylistItems(addPlaylistItems: AddPlaylistItems): Promise<Response>;
  getPlaylistItems(getPlaylistItems: GetPlaylistItems): Promise<Response>;
}
