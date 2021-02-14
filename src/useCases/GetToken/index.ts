import { SpotifyService } from '@services/implementations/SpotifyService';
import { GetTokenController } from './GetTokenController';
import { GetTokenUseCase } from './GetTokenUseCase';

const spotifyService = new SpotifyService();

const getTokenUseCase = new GetTokenUseCase(spotifyService);

const getTokenController = new GetTokenController(getTokenUseCase);

export { getTokenController };
