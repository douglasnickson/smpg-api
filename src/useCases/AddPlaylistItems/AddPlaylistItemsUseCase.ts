import { AddPlaylistItem } from '@entities/AddPlaylistItem';
import { IPlaylistService } from '@services/IPlaylistService';
import { Response } from 'express';
import { AddPlaylistItemDTO } from './AddPlaylistItemDTO';

export class AddPlaylistItemUseCase {
  constructor(private playlistService: IPlaylistService) {}

  async execute(addPlaylistItemDTO: AddPlaylistItemDTO): Promise<Response> {
    const addPlaylistItem = new AddPlaylistItem(addPlaylistItemDTO);
    return this.playlistService.addPlaylistItem(addPlaylistItem);
  }
}
