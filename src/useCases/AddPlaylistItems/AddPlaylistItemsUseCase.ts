import { AddPlaylistItems } from '@entities/AddPlaylistItems';
import { HeadersRequest } from '@entities/HeadersRequest';
import { IPlaylistService } from '@services/IPlaylistService';
import { Response } from 'express';
import { AddPlaylistItemsDTO } from './AddPlaylistItemsDTO';

export class AddPlaylistItemsUseCase {
  constructor(private playlistService: IPlaylistService) {}

  async execute(addPlaylistItemsDTO: AddPlaylistItemsDTO): Promise<Response> {
    const addPlaylistItems = new AddPlaylistItems(addPlaylistItemsDTO);
    const headers = new HeadersRequest(addPlaylistItems.token);
    addPlaylistItems.setHeaders(headers.getJsonHeader());

    return this.playlistService.addPlaylistItems(addPlaylistItems);
  }
}
