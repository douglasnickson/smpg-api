import { SearchServiceImpl } from '@services/implementations/SearchServiceImpl';
import { SearchController } from './SearchController';
import { SearchUseCase } from './SearchUseCase';

const searchServiceImpl = new SearchServiceImpl();
const searchUseCase = new SearchUseCase(searchServiceImpl);
const searchController = new SearchController(searchUseCase);

export { searchController };
