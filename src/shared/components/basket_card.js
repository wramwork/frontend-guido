import React, { Component } from 'react';
import Dropdown from "./dropdown";
import Common from "../../core/utility/common";
import CartOperation from "../../core/utility/cart";

export default class BasketCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: {},
            clarifications: "",
            selected: 0,
            iserror: false,
            showError: false,
            errors: {
                quantity: ""
            }
        }
        this.common = new Common();
        this.CartOperation = new CartOperation()
    }
    validate = async () => {
        this.setState({ iserror: false })
        let errors = this.state.errors
        let quantity = 0
        for (const value in this.state.quantity){
            quantity = quantity + this.state.quantity[value]
        }
        if (quantity == 0) {
            this.setState({ iserror: true })
            errors.quantity = "Please select quantity"
        }
        else {
            errors.quantity = ""
        }
    }
    add_to_cart = data => async (e) => {
        var cartData = {
            data: data,
            quantity: this.state.quantity,
            clarifications: this.state.clarifications
        }
        await this.validate()
        if (this.state.iserror) {
            this.setState({ showError: true })
        }
        else {
            await this.CartOperation.setNewCartElement(cartData)
            this.removeModal()
        }

    }

    removeModal = async () => {
        this.setState({
            quantity: {}, clarifications: "", selected: 0, iserror: false,
            showError: false,
            errors: {
                quantity: ""
            }
        })
    }
    handleState = (value, element) => {
        this.setState({ showError: false })
        this.state.quantity[element] = value
        this.setState({ selected: value })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const { element } = this.props;
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
                                                <Dropdown limit={13} quantity={this.handleState} name={element} selected={this.state.selected} />
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
                    <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.quantity}</label>
                    <button className="btn btn-danger  btn-block" value="AGREGAR A MI PEDIDO" onClick={this.add_to_cart(element)}>AGREGAR A MI PEDIDO</button>
                </div>
            </div>

        )
    }
}

