import {ACTION_LOGIN,ACTION_LOGOUT} from '../actions/types';

const initialState = localStorage.getItem('token') ? { loggedIn: true } : {loggedIn:false};
export default function(state=initialState,action){
    switch(action.type){
        case ACTION_LOGIN:
              return{
                  loggedIn:true
              }
        case ACTION_LOGOUT:
              return{
                  loggedIn:false
              }      
    default:
        return state;    
    }
}