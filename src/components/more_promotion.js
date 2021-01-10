import React, { Component } from 'react';


class MorePromotion extends Component {

    render() {
        return (
            <section class="mas-promociones">
                <h1><strong>MÁS PROMOCIONES</strong> </h1>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-4">
                            <h3>Promo muzza chica mas cuatro empanadas o canastitas simples.</h3>
                            <p>Una muzzarella grande mas cuatro porciones de faina.</p>
                            <h3 class="mas-precio">$540</h3>
                        </div>
                        <div class="col-lg-1 col-md-1 col-sm-1">
                            {/* Button trigger modal  */}
                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-4">
                            <h3>Promo muzza grande mas seis empanadas o canastitas simples.</h3>
                            <p>Una muzzarella grande mas cuatro porciones de faina.</p>
                            <h3 class="mas-precio">$740</h3>
                        </div>
                        <div class="col-lg-1 col-md-1 col-sm-1">
                            {/* Button trigger modal  */}
                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-4">
                            <h3>Promo una docena de empanadas de carne suave o picante.</h3>
                            <p>12 empanadas de carne suave o picante.</p>
                            <h3 class="mas-precio">$684</h3>
                        </div>
                        <div class="col-lg-1 col-md-1 col-sm-1">
                            {/* Button trigger modal  */}
                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-4">
                            <h3>Promo picada de pizza mas seis empanadas o canastitas simples.</h3>
                            <p>1 picada de pizza mas seis empanadas o canastitas simples.</p>
                            <h3 class="mas-precio">$870</h3>
                        </div>
                        <div class="col-lg-1 col-md-1 col-sm-1">
                            {/* Button trigger modal  */}
                            <button type="button" class="btn" data-toggle="modal" data-target="#myModal"><img src="imagenes/iconos/plus (1).svg" class="icono-agregar"></img></button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MorePromotion