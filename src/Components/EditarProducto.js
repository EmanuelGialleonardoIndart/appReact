import React, { Component } from 'react';
import {mostrarProducto} from '../actions/productosActions';
import {editarProducto} from '../actions/productosActions';
import {connect} from 'react-redux';

class EditarProducto extends Component {
    state={
        titulo:'',
        precio:'',
        error:false
    }

    componentDidMount(){
        this.props.mostrarProducto(this.props.match.params.id);
    }
    componentWillReceiveProps(nextProps,nextState){
        const{nombre,precio}=nextProps.producto;
        this.setState({
            titulo:nombre,
            precio:precio
        })
    }
    
    handleChange=(e)=>{
          this.setState({
              [e.target.name]:e.target.value
          })
          console.log(e.target.name,e.target.value);
    }
    handleSubmit=(e)=>{
          e.preventDefault();
          const {titulo,precio}=this.state;
          if(titulo ===''||precio ===''){
              this.setState({error:true});
              return;
          }
          this.setState({error:false})
          const post={
               id:this.props.match.params.id,
               nombre:titulo,
               precio:precio
          }
          this.props.editarProducto(post);
          this.props.history.push('/');
          
    }
    render() {
        const {error}=this.state;
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Agregar Nuevo Producto</h2>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input type="text" value={this.state.titulo} name="titulo"className="form-control" placeholder="Titulo" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Precio del Producto</label>
                                    <input type="text" value={this.state.precio} name="precio" className="form-control" placeholder="Precio" onChange={this.handleChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar cambios</button>
                            </form>
                            {error ? 
                               <div className="font-weight-bold alert alert-danger text-center mt-4">
                                   Todos los campos son obligatorios
                               </div>
                               :''
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps=state=>({
    producto:state.productos.producto
})
export default connect(mapStateToProps,{mostrarProducto,editarProducto})(EditarProducto);