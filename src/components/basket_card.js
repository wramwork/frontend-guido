import React, { Component } from 'react';
import Dropdown from "./dropdown";

export default class BasketCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            basketdata: props.basketdata
        }
    }
    dropdownsData = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    }
    render() {
        return (
            this.state.basketdata.map(element => (
                <div className="col-lg-6 col-sm-12 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-9 col-md-9 col-sm-9">
                                    <h5 className="card-title"> <strong style={{ "white-space": "pre-wrap" }}>{element.name}</strong></h5>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3">
                                    <h5 className={element.type=="empanadas"?"empanadas-precio":"canastitas-precio"}>{element.price}</h5>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    this.dropdownsData(element.options, 4).map(ele => {
                                        return (

                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <Dropdown data={ele} />
                                            </div>

                                        )
                                    })
                                    
                                }
                                {
                                    element.image &&
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <img src={element.image} alt={element.type=="empanadas"?"empanada de carne":"canastitas especiales"} class={element.type == "empanadas"?"empanadas-img":"canastitas-img"} />
                                    </div>
                            
                                }
                            </div>
                            
                            <input type="text" placeholder="Aclaraciones" className="aclaraciones"></input>
                            <button className="btn btn-danger  btn-block" value="AGREGAR A MI PEDIDO">AGREGAR A MI PEDIDO</button>
                        </div>
                    </div>

                </div>))
        )
    }
}

