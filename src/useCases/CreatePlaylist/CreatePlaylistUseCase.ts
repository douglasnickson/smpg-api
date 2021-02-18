import { CreatePlaylist } from '@entities/CreatePlaylist';
import { IPlaylistService } from '@services/IPlaylistService';
import { Response } from 'express';
import { CreatePlaylistDTO } from './CreatePlaylistDTO';

export class CreatePlaylistUseCase {
  constructor(private playlistService: IPlaylistService) {}

  async execute(createPlaylistDTO: CreatePlaylistDTO): Promise<Response> {
    const createPlaylist = new CreatePlaylist(createPlaylistDTO);
    return this.playlistService.createPlaylist(createPlaylist);
  }
}
