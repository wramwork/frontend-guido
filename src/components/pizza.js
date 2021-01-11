import React, { Component } from 'react';
import PizzasModal from "./pizzas_modal";

class Pizza extends Component {

    render() {
        return (
            <>
        <a name = "pizzas"></a>
            <section className="pizzas">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 col-md-11 mb-11">
                            <h1><strong>Pizzas </strong> </h1>
                            <ul>
                                <li className="pizzas-nombre">Muzzarella <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, orégano y aceitunas</li>

                                <li className="pizzas-nombre">Margarita  <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, albahaca y aceitunas</li>

                                <li className="pizzas-nombre">Napolitana <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, rodajas de tomate, provenzal, orégano y aceitunas.</li>

                                <li className="pizzas-nombre">Calabresa <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, rodajas de tomate, cantimpalo, morrón, orégano y aceitunas</li>

                                <li className="pizzas-nombre">Roquefort <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, roquefort, orégano y aceitunas.</li>

                                <li className="pizzas-nombre">Anchoas <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, anchoas, orégano y aceitunas.</li>

                                <li className="pizzas-nombre">Infiernillo <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, rodajas de tomate, cantimpalo, morrón, anchoas,
                        ajies en vinagre, aji molido, perejil, orégano y aceitunas.  </li>

                                <li className="pizzas-nombre">7 Colores <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, rodajas de tomate, morrón,
                        huevo duro, ajies en vinagre, ajo, perejil, orégano y aceitunas. </li>

                                <li className="pizzas-nombre">Provolone <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span> </li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, provolone, orégano y aceitunas. </li>

                                <li className="pizzas-nombre">Provolone con Jamón <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span> </li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, provolone, jamon, orégano y aceitunas. </li>

                                <li className="pizzas-nombre">Provolone Con Tomate <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, provolone, tomate, orégano y aceitunas. </li>

                                <li className="pizzas-nombre">Jamón <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, jamon, orégano y aceitunas.</li>

                                <li className="pizzas-nombre">Jamón Y Morron <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span> </li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, jamon, morron, orégano y aceitunas. </li>

                                <li className="pizzas-nombre">Jamón Y Anana <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, jamon, anana, orégano y aceitunas. </li>

                                <li className="pizzas-nombre">Rucula Con Secos <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span> </li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, rucula, tomates secos y aceitunas.</li>

                                <li className="pizzas-nombre">Rucula Con Crudo <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, rucula, jamon crudo y aceitunas. </li>

                                <li className="pizzas-nombre">Pizzaiola <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, ajo, perejil, oregano y aceitunas.</li>

                                <li className="pizzas-nombre">Fugazza <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Cebolla, provolone y aceitunas. </li>

                                <li className="pizzas-nombre">Fugazzeta <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Muzzarella, cebolla, provolone, oregano y aceitunas. </li>

                                <li className="pizzas-nombre">Fugazzeta Con Jamón <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span> </li>
                                <li className="pizzas-ingredientes">Muzzarella, cebolla, jamon, oregano y aceitunas. </li>

                                <li className="pizzas-nombre">Fugazzeta Con Panceta  <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Muzzarella, cebolla, panceta, aji molido, oregano y aceitunas. </li>

                                <li className="pizzas-nombre">Completa <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, rodajas de tomate, morron, palmitos, jamon, salsa golf, oregano y aceitunas. </li>

                                <li className="pizzas-nombre">Palmitos  <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, palmitos, salsa golf, oregano y aceitunas. </li>

                                <li className="pizzas-nombre">Champignon  <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes"> Salsa de tomate, muzzarella, champignon, perejil, oregano y aceitunas. (opcional ajo) </li>

                                <li className="pizzas-nombre">Cuatro Colores <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span> </li>
                                <li className="pizzas-ingredientes">1/4 de jamon y morron, 1/4 de napolitana, 1/4 de champignon y 1/4 de palmitos </li>

                                <li className="pizzas-nombre">Cuatro Quesos <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                <li className="pizzas-ingredientes">Salsa de tomate, muzzarella, sardo, provolone, roquefort, oregano y aceitunas. </li>

                                <li className="pizzas-nombre">Fainá (porción) <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <PizzasModal />
        </>
        );
    }
}

export default Pizza