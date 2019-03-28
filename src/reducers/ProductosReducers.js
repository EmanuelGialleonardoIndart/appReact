import {MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTOS, AGREGAR_PRODUCTO, MOSTRAR_PRODUCTO,EDITAR_PRODUCTOS} from '../actions/types';

const initialState={
    productos:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case MOSTRAR_PRODUCTOS:
              return{
                  ...state,
                  productos:action.payload
              }
        case MOSTRAR_PRODUCTO:
              return{
                  ...state,
                  producto:action.payload
              }  
        case EDITAR_PRODUCTOS:
              return{
                  ...state,
                  productos:state.productos.map(
                      producto=>producto.id===action.payload.id?(producto=action.payload):producto
                  )
              }          
        case ELIMINAR_PRODUCTOS:
              return{
                  ...state,
                  productos:state.productos.filter(producto=>producto.id!==action.payload)
              }
        case AGREGAR_PRODUCTO:
              return{
                  ...state,
                  productos:[...state.productos,action.payload]
              }            
        default:
            return state;      
    }
}