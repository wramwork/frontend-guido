import React, { Component } from 'react';

export default class PromotionsCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            promotiondata: props.promotionData
        }
    }
    openModal = data => e => {
        this.props.openModal(data)
      }
  render() {
    return (
        this.state.promotiondata.map(element => (
            <div className="col-lg-3 col-md-6 col-sm-4">
                <div className="card h-100">
                    <img className="card-img-top" src={element.image} alt=""></img>
                    <div className="card-body">
                        <h4 className="promo-titulo">{element.name}</h4>
                        <p className="promo-texto">{element.description}</p>
                        <a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en" rel="noreferrer" target="_blank"><img src="imagenes/iconos/instragram.svg" className="promo-redes" alt="link a instragram"/></a>
                        <a href="https://www.facebook.com/PizzeriaLosMirasoles" rel="noreferrer" target="_blank"><img src="imagenes/iconos/facebook.svg" className="promo-redes" alt="link a facebook" /></a>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-7">
                                <h4 className="promo-precio">{element.price}</h4>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <button type="button" className="btn" data-toggle="modal" data-target="#myModal3" onClick={this.openModal(element)}><img src="imagenes/iconos/plus (1).svg" alt="" className="icono-agregar"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
  }
}

