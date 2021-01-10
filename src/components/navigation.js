import React, {Component} from 'react';


class Navigation extends Component {
    render() {
        return (
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <img src="imagenes/logo de Los Mirasoles para pagina web.png" alt="logo" class="logo">
                    </img>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#pizzas"><img src="./imagenes/iconos/pizzas.png" alt="link a pizzas" class="nav-iconos"></img>PIZZAS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#canastitas"><img src="./imagenes/iconos/canastitas.png" alt="link a canastitas" class="nav-iconos"></img>CANASTITAS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#otrascomidas" ><img src="imagenes/iconos/otras comidas.png" alt="link a otras comidas" class="nav-iconos"></img>OTRAS COMIDAS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#bebidas" ><img src="imagenes/iconos/bebidas.png" alt="link a " class="nav-iconos"></img>BEBIDAS</a>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn" data-toggle="modal" data-target="#myModal4"><img src="imagenes/iconos/mi orden.png" alt="link a mi pedido" class="nav-iconos"></img>MI PEDIDO</button>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="btn" data-toggle="modal" data-target="#myModal5"><img src="imagenes/iconos/iniciar sesion.png" alt="link a mi pedido" class="nav-iconos"></img>INICIAR SESION</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        );
    }
}

export default Navigation