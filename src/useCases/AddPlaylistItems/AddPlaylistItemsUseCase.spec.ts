import request from 'supertest';
import app from '../../app';
import { AddPlaylistItemsDTO } from './AddPlaylistItemsDTO';

describe('CreatePlaylist', () => {
  it('Should add items to Playlist on Spotify', async () => {
    const data: AddPlaylistItemsDTO = {
      token: process.env.TOKEN,
      uris:
        'spotify:track:6gUejkYukr6D9MfZaJawPS,spotify:track:6qiWdPh2DnoEdOmX2g6t3W',
      position: '0',
      playlistId: '2H2XLeBT1e6h4o2BkIar0m',
    };

    const response = await request(app).post('/playlist/item/add').send(data);
    expect(response.status).toBe(200);
  });

  it('Should return a error if token is invalid.', async () => {
    const data: AddPlaylistItemsDTO = {
      token: null,
      uris:
        'spotify:track:6gUejkYukr6D9MfZaJawPS,spotify:track:6qiWdPh2DnoEdOmX2g6t3W',
      position: '0',
      playlistId: '2H2XLeBT1e6h4o2BkIar0m',
    };

    const response = await request(app).post('/playlist/item/add').send(data);
    expect(response.status).toBe(400);
  });
});
