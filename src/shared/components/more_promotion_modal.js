import React, { Component } from 'react';
import Dropdown from "./dropdown";
import CartOperation from "../../core/utility/cart";
import Common from "../../core/utility/common";

class MorePromotionModal extends Component {
  constructor(props) {
    super(props)
    this.cart = new CartOperation();
    this.common = new Common();
  }
  modelStyle = {
    width: '100%',
    height: '3em'
  }
  state = {
    empanadas: ["Carne suave", "Carne picante", "Jamón y queso", "Queso y cebolla", "Espinaca", "Choclo", "Roquefort"],
    canastitas: ["Panceta y ciruela", "Calabresa", "Napolitana", "Jamón y provolone", "Panceta y provolone", "Rucula", "Pizzita"],
    quantity: {
      empanadas: {},
      canastitas: {},
      total_quantity: 0
    },
    clarifications: "",
    iserror: false,
    showError: false,
    errors: {
      quantity: ""
    }
  }
  removeModal = () => {
    this.props.closeModal()
    this.state.quantity = {
      empanadas: {},
      canastitas: {},
      total_quantity: 0
    }
    this.setState({
      clarifications: "",
      iserror: false,
      showError: false,
      errors: {
        quantity: ""
      }
    })
  }
  validate = async () => {
    this.setState({ iserror: false })
    let errors = this.state.errors
    console.log(this.state.quantity)
    let quantity = 0
    for (const value in this.state.quantity.empanadas) {
      quantity = quantity + this.state.quantity.empanadas[value]
    }
    for (const value in this.state.quantity.canastitas) {
      quantity = quantity + this.state.quantity.canastitas[value]
    }
    if (quantity == 0) {
      this.setState({ iserror: true })
      errors.quantity = "Please select atleast one element"
    }
    else if (this.state.quantity.total_quantity == 0) {
      this.setState({ iserror: true })
      errors.quantity = "Please select total quantity"
    }
    else {
      errors.quantity = ""
    }
  }
  add_to_cart = async () => {
    var cartData = {
      data: this.props.selectedData,
      quantity: this.state.quantity,
      clarifications: this.state.clarifications
    }
    await this.validate()
    if (this.state.iserror) {
      this.setState({ showError: true })
    }
    else {
      await this.cart.setNewCartElement(cartData)
      this.removeModal()
    }
  }
  handleState = (value, element) => {
    this.setState({ showError: false })
    if (element === "quantity") {
      this.state.quantity.total_quantity = value;
    }
    else {
      this.state.quantity[element.parent][element.name] = value
    }
  }
  handleChange = (event) => {
    this.setState({ showError: false })
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    const { visible } = this.props;
    return (
      <React.Fragment>
        {visible ? (
          <section className="modal1">
            <div className="modal fade" data-backdrop="false" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="myModalLabel">¡Elegi tus empanadas o canastitas para la promo!</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.removeModal}><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div className="modal-body">
                    <section className="empanadas">
                      <div className="container">
                        <div className="row">
                          <div className="col-6">
                            <div className="card">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col">
                                    <h5 className="card-title"><strong>EMPANADAS</strong></h5>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    {this.state.empanadas.map(element => (
                                      <>
                                        <Dropdown limit={13} quantity={this.handleState} name={{ "parent": "empanadas", "name": element }} />
                                        <span className="caret">{element}</span> <br />
                                      </>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="card">
                              <div className="card-body">
                                <div className="row">
                                  <div className="col">
                                    <h5 className="card-title"><strong>CANASTITAS</strong></h5>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    {this.state.canastitas.map(element => (
                                      <>
                                        <Dropdown limit={13} quantity={this.handleState} name={{ "parent": "canastitas", "name": element }} />
                                        <span className="caret">{element}</span> <br />
                                      </>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <input type="text" placeholder="Aclaraciones" name={"clarifications"} style={this.modelStyle} onChange={this.handleChange}></input>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="container">
                    <div className="footer">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                          <Dropdown limit={5} quantity={this.handleState} />
                          <span className="caret">  Cantidad</span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9">
                          <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.quantity}</label>
                          <button className="btn btn-danger  btn-block" value="AGREGAR A MI PEDIDO" onClick={this.add_to_cart}>AGREGAR A MI PEDIDO</button>
                        </div>
                      </div> <br />
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

export default MorePromotionModal;