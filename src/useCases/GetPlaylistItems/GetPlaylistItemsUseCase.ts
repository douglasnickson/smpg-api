import { Response } from 'express';
import { HeadersRequest } from '@entities/HeadersRequest';
import { IPlaylistService } from '@services/IPlaylistService';
import { GetPlaylistItems } from '@entities/GetPlaylistItems';
import { GetPlaylistItemsDTO } from './GetPlaylistItemsDTO';

export class GetPlaylistItemsUseCase {
  constructor(private playlistService: IPlaylistService) {}

  async execute(getPlaylistItemsDTO: GetPlaylistItemsDTO): Promise<Response> {
    const getPlaylistItems = new GetPlaylistItems(getPlaylistItemsDTO);
    const headers = new HeadersRequest(getPlaylistItems.token);
    getPlaylistItems.setHeaders(headers.getJsonHeader());

    return this.playlistService.getPlaylistItems(getPlaylistItems);
  }
}
