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
        'AQAQI9cPVUkaW-cD7KtWd-gb6hvflroFxWhdZcSHGHPcB33Ihx_C1fSZKXxa-T0uBkE4C6MBGiodnayzeOUEO-gGEMMjl0fq41iaO_4AfN5cMacGLk6oXu1AR6Qagn4PAi64bqeWC7XQvTI6yVRXg99_rRKvd0DS-A',
      grantType: 'authorization_code',
      redirectUri: 'https://insomnia.rest',
    };

    const response = await request(app)
      .post('/authorization/spotify')
      .send(data);

    expect(response.status).toBe(200);
  });
});
