export interface GetPlaylistItemsDTO {
  token: string;
  playlistId: string;
  market: string;
  fields?: string;
  limit?: number;
  offset?: number;
  additionalType?: string;
}
