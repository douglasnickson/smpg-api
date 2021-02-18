export interface CreatePlaylistDTO {
  token: string;
  userId: string;
  name: string;
  public: boolean;
  collaborative: boolean;
  description: string;
}
