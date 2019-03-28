import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login,logout} from '../actions/userActions';

class Header extends Component {

    login=()=>{
        this.props.login({
            username:'maxnu',
            password:'123456'
        })  
    }

    logout=()=>{
        this.props.logout();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
               <h1>
                   <Link to={'/'} className="text-light">CRUD-React, Redux, REST,Axio</Link>                   
               </h1>
               <div>
                    <Link to={"/productos/nuevo"} className="btn btn-danger nuevo-post">
                        Agregar Producto
                    </Link>
                    {this.props.loggedIn? 
                     <button onClick={this.logout} className="btn btn-danger nuevo-post ml-2">Cerrar sesion</button>
                    :<button onClick={this.login} className="btn btn-danger nuevo-post ml-2">Iniciar sesion</button>}                    
               </div>                              
            </nav>
        );
    }
}
const mapStateToProps=state=>({
    loggedIn:state.logged.loggedIn
})

export default connect(mapStateToProps,{login,logout})(Header);