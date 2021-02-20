import { HeadersRequest } from '@entities/HeadersRequest';
import { Response } from 'express';
import { Browse } from '@entities/Browse';
import { IBrowseService } from '@services/IBrowseService';
import { BrowseDTO } from '@useCases/Browse/BrowseDTO';

export class BrowseUserCase {
  constructor(private browseService: IBrowseService) {}

  async executeCategories(BrowseDTO: BrowseDTO): Promise<Response> {
    const browse = new Browse(BrowseDTO);
    const header = new HeadersRequest(browse.token);
    browse.setHeaders(header.getFormHeader());

    this.isLimitAndOffsetOk(browse);

    return await this.browseService.categories(browse);
  }

  async executePlaylists(BrowseDTO: BrowseDTO): Promise<Response> {
    const browse = new Browse(BrowseDTO);
    const header = new HeadersRequest(browse.token);
    browse.setHeaders(header.getFormHeader());

    this.isLimitAndOffsetOk(browse);

    return await this.browseService.playlists(browse);
  }

  private isLimitAndOffsetOk(browse: Browse) {
    if (!browse.isLimitValid()) {
      throw Error('Limit is not valid, Minimum: 1 and Maximum: 50');
    }

    if (!browse.isOffsetValid()) {
      throw Error('Offset is not valid, Minimum: 0 and Maximum: 1000');
    }
  }
}
