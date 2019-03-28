import {MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTOS, AGREGAR_PRODUCTO,MOSTRAR_PRODUCTO, EDITAR_PRODUCTOS} from './types';
import axios from 'axios';

export const mostrarProductos=()=>async dispatch=>{
    const respuesta=await axios.get('http://localhost:5000/productos');
    dispatch({
        type:MOSTRAR_PRODUCTOS,
        payload:respuesta.data
    })
}
export const mostrarProducto=(id)=>async dispatch=>{
    const respuesta=await axios.get(`http://localhost:5000/productos/${id}`);
    dispatch({
        type:MOSTRAR_PRODUCTO,
        payload:respuesta.data
    })
}

export const borrarPost=id=>async dispatch=>{
    await axios.delete(`http://localhost:5000/productos/${id}`);
    dispatch({
        type:ELIMINAR_PRODUCTOS,
        payload:id
    })
}

export const agregarProducto=(post)=>async dispatch=>{
    const respuesta=await axios.post('http://localhost:5000/productos',post);
    dispatch({
        type:AGREGAR_PRODUCTO,
        payload:respuesta.data
    })
}

export const editarProducto=(post)=>async dispatch=>{
    const respuesta=await axios.put(`http://localhost:5000/productos/${post.id}`,post);
    dispatch({
        type:EDITAR_PRODUCTOS,
        payload:respuesta.data
    })
}