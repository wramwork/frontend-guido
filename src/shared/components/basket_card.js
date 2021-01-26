import React, { Component } from 'react';
import Dropdown from "./dropdown";
import Common from "../../core/utility/common";
import CartOperation from "../../core/utility/cart";

export default class BasketCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: {},
            clarifications: ""
        }
        this.common = new Common();
        this.CartOperation = new CartOperation()
    }
    add_to_cart = data => async(e) => {
        var cartData = {
          data: data,
          quantity: this.state.quantity,
          clarifications: this.state.clarifications
        }
        await this.CartOperation.setNewCartElement(cartData)
        this.removeModal()
      }

    removeModal = () => {
    this.setState({quantity: {}})
    this.setState({clarifications: ""})
    this.child.setDefault()
    console.log(this.state)
    }
    handleState = (value, element) => {
        this.state.quantity[element] = value
      }
    handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
    }
    render() {
        const {element} = this.props;
        return (
                
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-9 col-md-9 col-sm-9">
                                    <h5 className="card-title"> <strong style={{ "white-space": "pre-wrap" }}>{element.name}</strong></h5>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3">
                                    <h5 className={element.type === "empanadas" ? "empanadas-precio" : "canastitas-precio"}>{element.price}</h5>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    this.common.slice_object(element.options, 4).map(ele => {
                                        return (
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                {ele.map(element => (
                                                    <>
                                                        <Dropdown limit={13} quantity={this.handleState} name={element} ref={instance => this.child = instance}/>
                                                        <span className="caret">{element}</span> <br />
                                                    </>
                                                ))}
                                            </div>

                                        )
                                    })
                                }
                                {
                                    element.image &&
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <img src={element.image} alt={element.type === "empanadas" ? "empanada de carne" : "canastitas especiales"} class={element.type === "empanadas" ? "empanadas-img" : "canastitas-img"} />
                                    </div>

                                }
                            </div>
                            <input type="text" placeholder="Aclaraciones" className="aclaraciones" name={"clarifications"} value={this.state.clarifications} onChange={this.handleChange}></input>
                            <button className="btn btn-danger  btn-block" value="AGREGAR A MI PEDIDO" onClick={this.add_to_cart(element)}>AGREGAR A MI PEDIDO</button>
                        </div>
                    </div>
                
        )
    }
}

