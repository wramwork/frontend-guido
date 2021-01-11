import React, { Component } from 'react';
import MorePromotionModal from './more_promotion_modal'

class MorePromotion extends Component {

    render() {
        return (
            <>
            <section className="mas-promociones">
                <h1><strong>MÁS PROMOCIONES</strong> </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-4">
                            <h3>Promo muzza chica mas cuatro empanadas o canastitas simples.</h3>
                            <p>Una muzzarella grande mas cuatro porciones de faina.</p>
                            <h3 className="mas-precio">$540</h3>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1">
                            {/* Button trigger modal  */}
                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-4">
                            <h3>Promo muzza grande mas seis empanadas o canastitas simples.</h3>
                            <p>Una muzzarella grande mas cuatro porciones de faina.</p>
                            <h3 className="mas-precio">$740</h3>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1">
                            {/* Button trigger modal  */}
                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-4">
                            <h3>Promo una docena de empanadas de carne suave o picante.</h3>
                            <p>12 empanadas de carne suave o picante.</p>
                            <h3 className="mas-precio">$684</h3>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1">
                            {/* Button trigger modal  */}
                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-4">
                            <h3>Promo picada de pizza mas seis empanadas o canastitas simples.</h3>
                            <p>1 picada de pizza mas seis empanadas o canastitas simples.</p>
                            <h3 className="mas-precio">$870</h3>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1">
                            {/* Button trigger modal  */}
                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                        </div>
                    </div>
                </div>
            </section>
            <MorePromotionModal/>
        </>
        );
    }
}

export default MorePromotion