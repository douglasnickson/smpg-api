import request from 'supertest';
import app from '../../app';
import { CreatePlaylistDTO } from './CreatePlaylistDTO';

describe('CreatePlaylist', () => {
  it('Should create a Playlist on Spotify', async () => {
    const data: CreatePlaylistDTO = {
      token: process.env.TOKEN,
      name: 'Playlist teste',
      public: true,
      collaborative: false,
      description: 'My Playlist',
      userId: 'douglasnickson',
    };

    const response = await request(app).post('/playlist/create').send(data);
    expect(response.status).toBe(200);
  });

  it('Should return a error if token is invalid.', async () => {
    const data: CreatePlaylistDTO = {
      token: null,
      name: 'Playlist teste',
      public: true,
      collaborative: false,
      description: 'My Playlist',
      userId: 'douglasnickson',
    };

    const response = await request(app).post('/playlist/create').send(data);
    expect(response.status).toBe(400);
  });
});
