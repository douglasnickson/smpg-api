import request from 'supertest';
import app from '../../app';
import { GetTokenDTO } from '@useCases/GetToken/GetTokenDTO';

describe('Authentication', () => {
  test('Should receive JWT token when authenticated with valid credentials', async () => {
    const data: GetTokenDTO = {
      clientId: process.env.CLIENTE_ID,
      clientSecret: process.env.SECRET_ID,
      code:
        'AQBqSD-1DYDHMKSD4Wrpz_wVf2DkJ9vJIjOfO1Rg7mqTFVtzBk9FHMiNzbf0uJvbMjqWNBEozjLFfUGVlN2dRKOQv6pkp58H70JxzhM1yKcS9lSSWbF4w5_1XpafPUVHimWCDbxlgUo5YcWBBCFsA6ReO2nmgY4IFw',
      grantType: 'authorization_code',
      redirectUri: 'https://insomnia.rest',
    };

    const response = await request(app)
      .post('/authorization/spotify')
      .send(data);

    expect(response.status).toBe(400);
  });

  test('Should receive JWT token when authenticated with valid credentials', async () => {
    const data: GetTokenDTO = {
      clientId: process.env.CLIENTE_ID,
      clientSecret: process.env.SECRET_ID,
      code:
        'AQAo_rR61yLxq7iP8i2fkhsdtDEsAWRUN1sZxX_bmUgvmVAm6L9TmkLwgO5dMg-oJhR3_1n1mCQ5SQPnjFtY-2CMU2S4q-0AqT8wp35k8nyHyL_kb_vsoijwXfos0aewF_ZG7agFn0rjPOyFV42RT9VJXh-OSI7BkQ',
      grantType: 'authorization_code',
      redirectUri: 'https://insomnia.rest',
    };

    const response = await request(app)
      .post('/authorization/spotify')
      .send(data);

    expect(response.status).toBe(200);
  });
});
