import {combineReducers} from 'redux';
import productosReducers from './ProductosReducers';
import UserReducer from './UserReducer';

export default combineReducers({
    productos:productosReducers,
    logged:UserReducer
});