import React, { Component } from 'react';


class OtherMeals extends Component {

    render() {
        return (
            <>
                <a name="otrascomidas"></a>

                <section className="otras-comidas">
                    <h1><strong>OTRAS COMIDAS</strong></h1>

                    {/* milanesas */}


                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 col-md-12 mb-12">
                                <h3><strong> MILANESAS AL PLATO</strong> </h3>
                                <ul>

                                    <li className="nombre">Milanesa de ternera al plato <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Milanesa de ternera al horno.</li>

                                    <li className="nombre">Milanesa napolitana al plato <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Milanesa de ternera al horno con salsa de tomate y queso</li>

                                    <li className="nombre">Milanesa con queso al plato  <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Milanesa de ternera al horno con queso.</li>

                                    <li className="nombre">Milanesa de soja al plato <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Milanesa de soja al horno</li>

                                    <li className="nombre">Milanesa de soja napolitana al plato <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Milanesa de soja al horno con salsa de tomate y queso.</li>

                                    <li className="nombre">Milanesa de soja con queso al plato <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Milanesa de soja al horno con queso. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* <!--sandwiches  --> */}
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 col-md-12 mb-12">
                                <h3><strong> SANDWICHES EN PAN DE PIZZA</strong> </h3>
                                <ul>
                                    <li className="nombre">Milanesa completo  <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Milanesa de ternera al horno con muzzarella, jamón, tomate y huevo con guarnición.</li>

                                    <li className="nombre">Tostado completo. <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Muzzarella, jamón, tomate, huevo y aceitunas con guarnición.</li>

                                    <li className="nombre">Milanesa de soja completo  <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Milanesa de soja al horno con tomate y queso con guarnición.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* <!-- platos --> */}


                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 col-md-12 mb-12">
                                <h3><strong>PLATOS CASEROS</strong> </h3>
                                <ul>
                                    <li className="nombre">Pastel de papa  <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Picadillo de roast beef cubierto de papas al mejor estilo casero.</li>

                                    <li className="nombre">Canelones <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Dos unidades rellenos de espinaca con salsa fileto y crema.</li>

                                    <li className="nombre">Lasagna <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">500 gramos de capas de espinaca, jamón y queso y carne con salsa fileto.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* <!-- tartas--> */}

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12">
                                <h3><strong> TARTAS INDIVIDUALES</strong> </h3>
                                <ul>
                                    <li className="nombre">Espinaca <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Espinaca, cebolla y huevo. (con tapa)</li>

                                    <li className="nombre">Jamón y queso <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Muzzarella con fetas de Jamón cocido. (con tapa) </li>

                                    <li className="nombre">Queso y cebolla <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Muzzarella, cebolla y verdeo. (sin tapa)</li>

                                    <li className="nombre">Capresse <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Muzzarella, tomate y albahaca. (sin tapa)</li>

                                    <li className="nombre">Pollo <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Pechuga de pollo, muzzarella, cebolla, morrón, salsa de tomate y perejil. (sin tapa)</li>

                                    <li className="nombre">Champignon <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">Champignon, muzzarella, cebolla y perejil. (sin tapa)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* <!-- bebidas --> */}
                    <a name="bebidas"></a>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12">
                                <h3><strong> BEBIDAS</strong> </h3>
                                <ul>
                                    <li className="nombre">Coca cola  <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">De litro y medio.</li>

                                    <li className="nombre">Coca zero <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">De litro y medio. </li>

                                    <li className="nombre">Coca Light <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">De litro y medio.</li>

                                    <li className="nombre">Sprite <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">De litro y medio.</li>

                                    <li className="nombre">Sprite zero <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
                                    <li className="ingredientes">De litro y medio.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section> <br /> <br />
            </>
        );
    }
}

export default OtherMeals