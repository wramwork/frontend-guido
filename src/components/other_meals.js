import React, { Component } from 'react';


class OtherMeals extends Component {

    render() {
        return (
            <>
                <a name="otrascomidas"></a>

                <section class="otras-comidas">
                    <h1><strong>OTRAS COMIDAS</strong></h1>

                    {/* milanesas */}


                    <div class="container">
                        <div class="row">

                            <div class="col-lg-12 col-md-12 mb-12">
                                <h3><strong> MILANESAS AL PLATO</strong> </h3>
                                <ul>

                                    <li class="nombre">Milanesa de ternera al plato <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Milanesa de ternera al horno.</li>

                                    <li class="nombre">Milanesa napolitana al plato <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Milanesa de ternera al horno con salsa de tomate y queso</li>

                                    <li class="nombre">Milanesa con queso al plato  <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Milanesa de ternera al horno con queso.</li>

                                    <li class="nombre">Milanesa de soja al plato <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Milanesa de soja al horno</li>

                                    <li class="nombre">Milanesa de soja napolitana al plato <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Milanesa de soja al horno con salsa de tomate y queso.</li>

                                    <li class="nombre">Milanesa de soja con queso al plato <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Milanesa de soja al horno con queso. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* <!--sandwiches  --> */}
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-12 col-md-12 mb-12">
                                <h3><strong> SANDWICHES EN PAN DE PIZZA</strong> </h3>
                                <ul>
                                    <li class="nombre">Milanesa completo  <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Milanesa de ternera al horno con muzzarella, jamón, tomate y huevo con guarnición.</li>

                                    <li class="nombre">Tostado completo. <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Muzzarella, jamón, tomate, huevo y aceitunas con guarnición.</li>

                                    <li class="nombre">Milanesa de soja completo  <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Milanesa de soja al horno con tomate y queso con guarnición.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* <!-- platos --> */}


                    <div class="container">
                        <div class="row">

                            <div class="col-lg-12 col-md-12 mb-12">
                                <h3><strong>PLATOS CASEROS</strong> </h3>
                                <ul>
                                    <li class="nombre">Pastel de papa  <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Picadillo de roast beef cubierto de papas al mejor estilo casero.</li>

                                    <li class="nombre">Canelones <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Dos unidades rellenos de espinaca con salsa fileto y crema.</li>

                                    <li class="nombre">Lasagna <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">500 gramos de capas de espinaca, jamón y queso y carne con salsa fileto.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* <!-- tartas--> */}

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 mb-12">
                                <h3><strong> TARTAS INDIVIDUALES</strong> </h3>
                                <ul>
                                    <li class="nombre">Espinaca <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Espinaca, cebolla y huevo. (con tapa)</li>

                                    <li class="nombre">Jamón y queso <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Muzzarella con fetas de Jamón cocido. (con tapa) </li>

                                    <li class="nombre">Queso y cebolla <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Muzzarella, cebolla y verdeo. (sin tapa)</li>

                                    <li class="nombre">Capresse <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Muzzarella, tomate y albahaca. (sin tapa)</li>

                                    <li class="nombre">Pollo <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Pechuga de pollo, muzzarella, cebolla, morrón, salsa de tomate y perejil. (sin tapa)</li>

                                    <li class="nombre">Champignon <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">Champignon, muzzarella, cebolla y perejil. (sin tapa)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <br />

                    {/* <!-- bebidas --> */}
                    <a name=""></a>

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 mb-12">
                                <h3><strong> BEBIDAS</strong> </h3>
                                <ul>
                                    <li class="nombre">Coca cola  <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">De litro y medio.</li>

                                    <li class="nombre">Coca zero <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">De litro y medio. </li>

                                    <li class="nombre">Coca Light <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">De litro y medio.</li>

                                    <li class="nombre">Sprite <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">De litro y medio.</li>

                                    <li class="nombre">Sprite zero <span><button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button></span></li>
                                    <li class="ingredientes">De litro y medio.</li>
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