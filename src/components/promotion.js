import React, { Component } from 'react';
// import PromotionModal from "./promotion";

class Promotions extends Component {
    style = {
        banner_slide: {
            width: '100%'
        }
    }
    render() {
        return (
            <>
            <section class="promos-mas-vendidas">
                <h1><strong>PROMOCIONES MÁS VENDIDAS</strong></h1>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-4">
                            <div class="card h-100">
                                <img class="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/muzza + 6 empanadas.jpg" alt=""></img>
                                <div class="card-body">
                                    <h4 class="promo-titulo">Promo amigos</h4>
                                    <p class="promo-texto">Picada de pizzas mas 6 empanadas o canastitas simples.</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en" target="_blank" ><img src="imagenes/iconos/instragram.svg" class="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles" target="_blank" ><img src="imagenes/iconos/facebook.svg" class="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-sm-7">
                                            <h4 class="promo-precio">$870</h4>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-3 col-md-6 col-sm-4">
                            <div class="card h-100">
                                <img class="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/12 de carne.jpg" alt=""></img>
                                <div class="card-body">
                                    <h4 class="promo-titulo">Promo familia</h4>
                                    <p class="promo-texto">24 empanadas o canastitas simples</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" class="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" class="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-sm-7">
                                            <h4 class="promo-precio">$1368</h4>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-3 col-md-6 col-sm-4">
                            <div class="card h-100">
                                <img class="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/tartas.jpg" alt=""></img>
                                <div class="card-body">
                                    <h4 class="promo-titulo">Tartas individuales</h4>
                                    <p class="promo-texto">De pollo, de jamón y queso, de espinaca, de queso y cebolla o de champignon</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" class="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" class="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-sm-7">
                                            <h4 class="promo-precio">$270</h4>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-3 col-md-6 col-sm-4">
                            <div class="card h-100">
                                <img class="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/milanesa sandwich.jpg" alt=""></img>
                                <div class="card-body">
                                    <h4 class="promo-titulo">Mila completa en pan de pizza</h4>
                                    <p class="promo-texto">Muzzarella, jamón, tomate, huevo y guarnición.</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" class="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" class="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-sm-7">
                                            <h4 class="promo-precio">$390</h4>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-4">
                            <div class="card h-100">
                                <img class="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/muzza + faina.jpg" alt=""></img>
                                <div class="card-body">
                                    <h4 class="promo-titulo">Promo muzza y faina</h4>
                                    <p class="promo-texto">1 grande de Muzzarella mas cuatro porciones de faina.</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" class="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" class="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-sm-7">
                                            <h4 class="promo-precio">$270</h4>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-4">
                            <div class="card h-100">
                                <img class="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/24 empanadas.jpg" alt=""></img>
                                <div class="card-body">
                                    <h4 class="promo-titulo">Mila napo con guarnición</h4>
                                    <p class="promo-texto">Milanesa con salsa de tomate y queso con guarnición.</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" class="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" class="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-sm-7">
                                            <h4 class="promo-precio">$270</h4>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-4">
                            <div class="card h-100">
                                <img class="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/picada pizza.jpg" alt=""></img>
                                <div class="card-body">
                                    <h4 class="promo-titulo">Picada de pizza</h4>
                                    <p class="promo-texto">Mix de pizza de cebolla, jamón,napolitana, muzza y morrón</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" class="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" class="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-sm-7">
                                            <h4 class="promo-precio">$270</h4>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-4">
                            <div class="card h-100">
                                <img class="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/picada pizza.jpg" alt=""></img>
                                <div class="card-body">
                                    <h4 class="promo-titulo">Picada de pizza</h4>
                                    <p class="promo-texto">Mix de pizza de cebolla, jamón, napolitana, muzza y morrón</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" class="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" class="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-lg-9 col-md-9 col-sm-7">
                                            <h4 class="promo-precio">$270</h4>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  

            </section>  
            {/* <PromotionModal /> */}
            </>
        );
    }
}

export default Promotions