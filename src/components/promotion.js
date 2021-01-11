import React, { Component } from 'react';
import PromotionModal from "./promotion_modal";

class Promotions extends Component {
    style = {
        banner_slide: {
            width: '100%'
        }
    }
    render() {
        return (
            <>
            <section className="promos-mas-vendidas">
                <h1><strong>PROMOCIONES MÁS VENDIDAS</strong></h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-4">
                            <div className="card h-100">
                                <img className="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/muzza + 6 empanadas.jpg" alt=""></img>
                                <div className="card-body">
                                    <h4 className="promo-titulo">Promo amigos</h4>
                                    <p className="promo-texto">Picada de pizzas mas 6 empanadas o canastitas simples.</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en" target="_blank" ><img src="imagenes/iconos/instragram.svg" className="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles" target="_blank" ><img src="imagenes/iconos/facebook.svg" className="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-9 col-sm-7">
                                            <h4 className="promo-precio">$870</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 col-sm-4">
                            <div className="card h-100">
                                <img className="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/12 de carne.jpg" alt=""></img>
                                <div className="card-body">
                                    <h4 className="promo-titulo">Promo familia</h4>
                                    <p className="promo-texto">24 empanadas o canastitas simples</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" className="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" className="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-9 col-sm-7">
                                            <h4 className="promo-precio">$1368</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 col-sm-4">
                            <div className="card h-100">
                                <img className="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/tartas.jpg" alt=""></img>
                                <div className="card-body">
                                    <h4 className="promo-titulo">Tartas individuales</h4>
                                    <p className="promo-texto">De pollo, de jamón y queso, de espinaca, de queso y cebolla o de champignon</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" className="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" className="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-9 col-sm-7">
                                            <h4 className="promo-precio">$270</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 col-sm-4">
                            <div className="card h-100">
                                <img className="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/milanesa sandwich.jpg" alt=""></img>
                                <div className="card-body">
                                    <h4 className="promo-titulo">Mila completa en pan de pizza</h4>
                                    <p className="promo-texto">Muzzarella, jamón, tomate, huevo y guarnición.</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" className="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" className="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-9 col-sm-7">
                                            <h4 className="promo-precio">$390</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-4">
                            <div className="card h-100">
                                <img className="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/muzza + faina.jpg" alt=""></img>
                                <div className="card-body">
                                    <h4 className="promo-titulo">Promo muzza y faina</h4>
                                    <p className="promo-texto">1 grande de Muzzarella mas cuatro porciones de faina.</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" className="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" className="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-9 col-sm-7">
                                            <h4 className="promo-precio">$270</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-4">
                            <div className="card h-100">
                                <img className="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/24 empanadas.jpg" alt=""></img>
                                <div className="card-body">
                                    <h4 className="promo-titulo">Mila napo con guarnición</h4>
                                    <p className="promo-texto">Milanesa con salsa de tomate y queso con guarnición.</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" className="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" className="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-9 col-sm-7">
                                            <h4 className="promo-precio">$270</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-4">
                            <div className="card h-100">
                                <img className="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/picada pizza.jpg" alt=""></img>
                                <div className="card-body">
                                    <h4 className="promo-titulo">Picada de pizza</h4>
                                    <p className="promo-texto">Mix de pizza de cebolla, jamón,napolitana, muzza y morrón</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" className="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" className="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-9 col-sm-7">
                                            <h4 className="promo-precio">$270</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-4">
                            <div className="card h-100">
                                <img className="card-img-top" src="imagenes/IMAGENES DE PROMOCIONES/picada pizza.jpg" alt=""></img>
                                <div className="card-body">
                                    <h4 className="promo-titulo">Picada de pizza</h4>
                                    <p className="promo-texto">Mix de pizza de cebolla, jamón, napolitana, muzza y morrón</p>
                                    <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" ><img src="imagenes/iconos/instragram.svg" className="promo-redes" alt="link a instragram"></img></a>
                                    <a href="https://www.facebook.com/PizzeriaLosMirasoles " target="_blank" ><img src="imagenes/iconos/facebook.svg" className="promo-redes" alt="link a facebook"></img></a>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-9 col-sm-7">
                                            <h4 className="promo-precio">$270</h4>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3">
                                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>  
            <PromotionModal />
            </>
        );
    }
}

export default Promotions