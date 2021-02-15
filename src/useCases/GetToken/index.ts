import { TokenServiceImpl } from '@services/implementations/TokenServiceImpl';
import { GetTokenController } from './GetTokenController';
import { GetTokenUseCase } from './GetTokenUseCase';

const tokenServiceImpl = new TokenServiceImpl();

const getTokenUseCase = new GetTokenUseCase(tokenServiceImpl);

const getTokenController = new GetTokenController(getTokenUseCase);

export { getTokenController };
