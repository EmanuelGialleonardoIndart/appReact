import {ACTION_LOGIN,ACTION_LOGOUT} from './types'
import axios from 'axios';

export const login=(auth)=>async dispatch=>{

     await axios.post('http://localhost:8080/api/user/auth',auth)
     .then(function(respond){
        localStorage.setItem('token','Bearer '+respond.data.token);
     })
     .catch(function(error){
         console.log(error);
     })
     
     dispatch({
         type:ACTION_LOGIN
     })
}
export const logout=()=>{
     localStorage.removeItem('token');
     return {type:ACTION_LOGOUT};
}