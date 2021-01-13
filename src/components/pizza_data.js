import React, { Component } from 'react';

export default class PizzaData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }
  render() {
    return (
        this.state.data.map(element => (
            <>
            <li className="pizzas-nombre">{element.name} <span><button type="button" className="btn" data-toggle="modal" data-target="#myModal2"><img src="imagenes/iconos/plus (1).svg" className="icono-agregar"></img></button></span></li>
            <li className="pizzas-ingredientes" style={{"white-space": "pre-wrap"}}>{element.description}</li>
            </>
        ))
    )
  }
}

