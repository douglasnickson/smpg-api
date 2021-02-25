import { SpotifyToken } from '@entities/SpotifyToken';
import { StreamingServiceTokenAbstract } from '@entities/StreamingServiceTokenAbstract';
import { TokenServiceImpl } from '@services/implementations/TokenServiceImpl';
import { GetTokenDTO } from '@useCases/GetToken/GetTokenDTO';
import { GetTokenUseCase } from '@useCases/GetToken/GetTokenUseCase';

describe('Authentication', () => {
  test('Should receive JWT token when authenticated with valid credentials', async () => {
    const data: GetTokenDTO = {
      clientId: process.env.CLIENTE_ID,
      clientSecret: process.env.SECRET_ID,
      code:
        'AQCt7P600ZOgjeFBDY4zqCdvONeJBjxRYDTLGraopzs5AvoQ5S4vXA-sC0IXaW--oYC2A2PRJpkb5lyB6NDJo5vipH9P8gdJ0e_8CR20Xx3yLqycwKJZm8bNBWyDRWPE3ANnHBdlikScxExSEuMo-kbrkyYho9UZ9A',
      grantType: 'authorization_code',
      redirectUri: 'https://insomnia.rest',
    };
    const streamingService: StreamingServiceTokenAbstract = new SpotifyToken(
      data
    );
    const tokenServiceImpl = new TokenServiceImpl();
    const getTokenUseCase = new GetTokenUseCase(tokenServiceImpl);
    const result = await getTokenUseCase.execute(streamingService);
    expect(result.accessToken).not.toBe('');
  });
});
