import React, { Component } from 'react';
import Dropdown from "./dropdown";
import CartOperation from "../../core/utility/cart";
import Common from "../../core/utility/common";

class PizzasModal extends Component {
  constructor(props) {
    super(props)
    this.cart = new CartOperation();
    this.common = new Common();
  }
  state = {
    quantity: {
      chica: 0,
      grande: 0
    },
    iserror: false,
    showError: false,
    errors: {
      quantity: ""
    }
  }
  removeModal = () => {
    this.props.closeModal()
    this.setState({quantity: {
      chica: 0,
      grande: 0
    },
    iserror: false,
    showError: false,
    errors: {
      quantity: ""
    }
  }
    
    )
    this.common.setbody()
  }
  validate = async() => {
    this.setState({iserror: false})
    let quantity = this.state.quantity.chica + this.state.quantity.grande
    let errors = this.state.errors
    if (quantity == 0)
    {
      this.setState({iserror: true})
      errors.quantity = "Please select quantity"
    }
    else{
      errors.quantity = ""
    }
  }
  add_to_cart = async() => {
    var cartData = {
      data: this.props.selectedData,
      quantity: this.state.quantity
    }
    await this.validate()
    if (this.state.iserror){
      this.setState({showError: true})
    }
    else{
    await this.cart.setNewCartElement(cartData)
    this.removeModal()
    }
  }
  handleState = (value, element) => {
    this.setState({showError: false})
    this.state.quantity[element] = value
  }
  render() {
    const { visible } = this.props;
    return (
      <React.Fragment>
        {visible ? (
          <section className="modal2">
            <div className="modal fade" data-backdrop="false" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
              <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.removeModal}><span aria-hidden="true">&times;</span></button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <h1 className="pizza-tamaño"><strong>CHICA</strong></h1>
                          <h2 className="pizza-precio"> <strong>$350</strong></h2>
                          <span className="caret"> <strong>CANTIDAD</strong></span>
                          <Dropdown limit={11} quantity={this.handleState} name={"chica"} />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 ">
                          <h1 className="pizza-tamaño"> <strong>GRANDE</strong></h1>
                          <h2 className="pizza-precio"> <strong>$540</strong></h2>
                          <span className="caret"><strong>CANTIDAD</strong></span>
                          <Dropdown limit={11} quantity={this.handleState} name={"grande"} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                        <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.quantity}</label>
                          <input className="btn btn-danger btn-block" type="submit" value="AGREGAR A MI PEDIDO" onClick={this.add_to_cart} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </React.Fragment>
    );
  }
}

export default PizzasModal;
