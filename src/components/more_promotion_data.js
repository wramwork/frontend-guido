import React, { Component } from 'react';

export default class MorePromotionData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            promotiondata: props.promotionData
        }
    }
  render() {
    return (
        this.state.promotiondata.map(element => (
            <>
            <div className="col-lg-5 col-md-5 col-sm-4">
                            <h3>{element.name}</h3>
                            <p>{element.description}</p>
                            <h3 className="mas-precio">{element.price}</h3>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1">
                            {/* Button trigger modal  */}
                            <button type="button" className="btn" data-toggle="modal" data-target="#myModal"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button>
                        </div>
                        </>
        ))
    )
  }
}

