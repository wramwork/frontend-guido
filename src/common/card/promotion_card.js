import React, { Component } from 'react';

export default class PromotionsCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            promotiondata: props.promotionData
        }
    }
  render() {
    return (
        this.state.promotiondata.map(element => (
            <div className="col-lg-3 col-md-6 col-sm-4">
                <div className="card h-100">
                    <img className="card-img-top" src={element.image} alt=""></img>
                    <div className="card-body">
                        <h4 className="promo-titulo">{element.title}</h4>
                        <p className="promo-texto">{element.description}</p>
                        <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en" target="_blank"><img src="imagenes/iconos/instragram.svg" className="promo-redes" alt="link a instragram"></img></a>
                        <a href="https://www.facebook.com/PizzeriaLosMirasoles" target="_blank"><img src="imagenes/iconos/facebook.svg" className="promo-redes" alt="link a facebook"></img></a>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-7">
                                <h4 className="promo-precio">{element.price}</h4>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <button type="button" className="btn" data-toggle="modal" data-target="#myModal3"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
  }
}

