import { BrowseServiceImpl } from '@services/implementations/BrowseServiceImpl';
import { BrowseController } from './BrowseController';
import { BrowseUserCase } from './BrowseUserCase';

const browseServiceImpl = new BrowseServiceImpl();
const browseUserCase = new BrowseUserCase(browseServiceImpl);
const browseController = new BrowseController(browseUserCase);

export { browseController };
