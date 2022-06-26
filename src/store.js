import {createStore} from 'redux';
import rootred from './setupredux/reducers/main';

const store=createStore(
    rootred
)
export default store;