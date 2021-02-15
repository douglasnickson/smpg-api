export interface SearchDTO {
  token: string;
  q: string;
  type: 'album' | 'artist' | 'playlist' | 'track' | 'show' | 'episode';
  market?: string;
  limit?: number;
  offset?: number;
  includeExternal?: string;
}
