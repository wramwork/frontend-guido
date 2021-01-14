import React, {Component} from 'react';
import LoginModal from "../shared/components/login";
import MyOrderModal from "../shared/components/my_order";

class Navigation extends Component {
    render() {
        return (
            <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src="imagenes/logo de Los Mirasoles para pagina web.png" alt="logo" className="logo">
                    </img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#pizzas">
                                    <img src="./imagenes/iconos/pizzas.png" alt="link a pizzas" className="nav-iconos"></img>
                                    PIZZAS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#canastitas">
                                    <img src="./imagenes/iconos/canastitas.png" alt="link a canastitas" className="nav-iconos">
                                    </img>CANASTITAS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#otrascomidas" ><img src="imagenes/iconos/otras comidas.png" alt="link a otras comidas" className="nav-iconos"></img>OTRAS COMIDAS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#bebidas" ><img src="imagenes/iconos/bebidas.png" alt="link a " className="nav-iconos"></img>BEBIDAS</a>
                            </li>
                            <li className="nav-item">
                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal4" >
                                <img src="imagenes/iconos/mi orden.png" alt="link a mi pedido" className="nav-iconos"></img>MI PEDIDO</button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn" data-toggle="modal" data-target="#myModal5" >
                                    <img src="imagenes/iconos/iniciar sesion.png" alt="link a mi pedido" className="nav-iconos">
                                    </img>
                                    INICIAR SESION
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        <LoginModal />
        <MyOrderModal />
        </>
        );
    }
}

export default Navigation