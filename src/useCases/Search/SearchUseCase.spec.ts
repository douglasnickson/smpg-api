import request from 'supertest';
import app from '../../app';
import { SearchDTO } from './SearchDTO';

describe('SearchUseCase', () => {
  it('Should return an JSON Object with information about the artist.', async () => {
    const data: SearchDTO = {
      token: process.env.TOKEN,
      q: 'Iron Maiden',
      type: 'artist,album',
      limit: 20,
      offset: 0,
    };

    const response = await request(app).get('/search').send(data);
    expect(response.status).toBe(200);
  });

  it('Should return an JSON Object with an artist album information based on album id.', async () => {
    const data: SearchDTO = {
      token: process.env.TOKEN,
      q: '6mdiAmATAx73kdxrNrnlao',
      type: 'album',
      limit: 20,
      offset: 0,
      operationType: 'album',
    };

    const response = await request(app).get('/search/album').send(data);
    expect(response.status).toBe(200);
  });

  it('Should return an JSON Object with the tracks of an album.', async () => {
    const data: SearchDTO = {
      token: process.env.TOKEN,
      q: '6IVkf5av5jnraZpLPszoZR',
      type: 'album',
      limit: 20,
      offset: 0,
      operationType: 'track',
    };

    const response = await request(app).get('/search/track').send(data);
    expect(response.status).toBe(200);
  });

  it('Should return an error when some information is missing.', async () => {
    const data: SearchDTO = {
      token: '',
      q: 'Iron Maiden',
      type: 'artist,album',
      limit: 20,
      offset: 0,
    };

    const response = await request(app).get('/search').send(data);
    expect(response.status).toBe(400);
  });

  it('Should return a generic error message when something goes wrong.', async () => {
    const data = null;

    const response = await request(app).get('/search').send(data);
    expect(response.body.message).toBe('Search params cannot be empty.');
  });

  it('Should return a error when limit is out of range.', async () => {
    const data: SearchDTO = {
      token: process.env.TOKEN,
      q: 'Iron Maiden',
      type: 'artist,album',
      limit: 0,
      offset: 0,
    };

    const response = await request(app).get('/search').send(data);
    expect(response.body.message).toBe(
      'Limit not valid. Minimum: 1 and Maximum: 50'
    );
  });

  it('Should return a error when offset is out of range.', async () => {
    const data: SearchDTO = {
      token: process.env.TOKEN,
      q: 'Iron Maiden',
      type: 'artist,album',
      limit: 20,
      offset: 1001,
    };

    const response = await request(app).get('/search').send(data);
    expect(response.body.message).toBe(
      'Offset not valid. Minimum: 0 and Maximum: 1000'
    );
  });
});
