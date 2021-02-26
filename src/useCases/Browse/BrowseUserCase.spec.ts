import request from 'supertest';
import app from '../../app';
import { BrowseDTO } from './BrowseDTO';

describe('Browse', () => {
  it('Should return a list of categories.', async () => {
    const data: BrowseDTO = {
      token: process.env.TOKEN,
      country: 'BR',
      locale: 'pt_BR',
      limit: 20,
      offset: 0,
    };

    const response = await request(app).get('/browse/categories').send(data);
    expect(response.status).toBe(200);
  });

  it('Should return a list of playlists based on category.', async () => {
    const data: BrowseDTO = {
      token: process.env.TOKEN,
      country: 'BR',
      limit: 20,
      offset: 0,
      categoryId: 'rock',
    };

    const response = await request(app).get('/browse/playlists').send(data);
    expect(response.status).toBe(200);
  });

  it('Should return a error when some of params is wrong.', async () => {
    const data: BrowseDTO = {
      token: '',
      country: 'BR',
      limit: 20,
      offset: 0,
      categoryId: '',
    };

    const response = await request(app).get('/browse/playlists').send(data);
    expect(response.status).toBe(400);
  });

  it('Should return a error when limit is out of range.', async () => {
    const data: BrowseDTO = {
      token: process.env.TOKEN,
      country: 'BR',
      locale: 'pt_BR',
      limit: 0,
      offset: 0,
    };

    const response = await request(app).get('/browse/categories').send(data);
    expect(response.body.message).toBe(
      'Limit not valid. Minimum: 1 and Maximum: 50'
    );
  });

  it('Should return a error when offset is out of range.', async () => {
    const data: BrowseDTO = {
      token: process.env.TOKEN,
      country: 'BR',
      locale: 'pt_BR',
      limit: 20,
      offset: 1001,
    };

    const response = await request(app).get('/browse/categories').send(data);
    expect(response.body.message).toBe(
      'Offset not valid. Minimum: 0 and Maximum: 1000'
    );
  });
});
