import request from 'supertest';
import app from '../../app';
import { GetPlaylistItemsDTO } from './GetPlaylistItemsDTO';

describe('GetPlaylistItems', () => {
  it('Should return a JSON object with an Playlist Items.', async () => {
    const data: GetPlaylistItemsDTO = {
      token: process.env.TOKEN,
      playlistId: '37i9dQZF1DX4vCk1GJH7zl',
      market: 'BR',
    };

    const response = await request(app).get('/playlist/item/get').send(data);
    expect(response.status).toBe(200);
  });

  it('Should return a error when some of params is not valid.', async () => {
    const data: GetPlaylistItemsDTO = {
      token: null,
      playlistId: '37i9dQZF1DX4vCk1GJH7zl',
      market: 'BR',
    };

    const response = await request(app).get('/playlist/item/get').send(data);
    expect(response.status).toBe(400);
  });
});
