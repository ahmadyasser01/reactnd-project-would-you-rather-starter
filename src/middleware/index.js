import thunk from 'redux-thunk';
import logger from './logger';
import { applyMiddleware } from 'redux';

const allMiddleware = applyMiddleware(thunk, logger
)
export default allMiddleware;
