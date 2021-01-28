import React, { Component } from 'react';
import ApiGateway from "../../core/apis/ApiGateway";
import * as myConstClass from "../../core/utility/constants";
import CartOperation from "../../core/utility/cart";
import Common from "../../core/utility/common";


class MyOrderModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clarifications: "",
      direction: "",
      number: "",
      department: "",
      iserror: false,
      showError: false,
      errors: {
        clarifications: "",
        direction: "",
        number: "",
        department: ""
      }
    }
    this.api_gateway = new ApiGateway();
    this.cart = new CartOperation();
    this.handleChange = this.handleChange.bind(this)
    this.confirmOrder = this.confirmOrder.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.common = new Common()
  }

  async confirmOrder(e) {
    e.preventDefault();
    var data = {
      "clarifications": this.state.clarifications,
      "direction": this.state.direction,
      "number": this.state.number,
      "department": this.state.department,
      "data": this.cart.getAllCartElement()
    }
    await this.validate()
    if (this.state.iserror) {
      this.setState({ showError: true })
    }
    else {
      await this.api_gateway.postData(myConstClass.CONFIRM_ORDER, data)
      this.cart.clearCart()
      this.closeModal()
    }
  }
  validate = async () => {
    this.setState({ iserror: false })
    let errors = this.state.errors
    if (this.state.direction.length < 3) {
      this.setState({
        iserror: true,
      })
      errors.direction = "Direction must be 3 characters long!"
    }
    else {
      errors.direction = ""
    }
    if (this.state.number.length < 1) {
      this.setState({
        iserror: true,
      })
      errors.number = "Number can not be empty"
    }
    else {
      errors.number = ""
    }
    if (this.state.department.length < 3) {
      this.setState({
        iserror: true,
      })
      errors.department = "Department must be 3 characters long!"
    }
    else {
      errors.department = ""
    }
  }
  handleChange(event) {
    event.preventDefault()
    this.setState({ showError: false })
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  closeModal() {
    this.setState({
      clarifications: "",
      direction: "",
      number: "",
      department: "",
      iserror: false,
      showError: false,
      errors: {
        clarifications: "",
        direction: "",
        number: "",
        department: ""
      }
    })
    this.common.setbody()
    this.props.handle("myOrderModal")
  }

  render() {
    const { visible } = this.props;
    return (
      <React.Fragment>
        {visible ? (
          <section className="modal4">
            <div className="modal fade" data-backdrop="false" id="myModal4" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
              <div className="modal-dialog modal-md" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3><strong>MI PEDIDO</strong></h3>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div className="modal-body">
                    <input type="text" placeholder=" Aclaraciones" className="aclaraciones" name="clarifications" value={this.state.clarifications} onChange={this.handleChange} /> <br />
                    <div className="form-input-group">
                      <label>DATOS DE ENVIO</label> <br />
                      <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.direction}</label>
                      <input type="text" placeholder=" Dirección" name="direction" value={this.state.direction} onChange={this.handleChange} />
                      <div className="row">
                        <div className="col-md-6">
                          <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.number}</label>
                          <input type="text" placeholder=" N°" name="number" value={this.state.number} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-6">
                          <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.department}</label>
                          <input type="text" placeholder=" Depto" name="department" value={this.state.department} onChange={this.handleChange} />
                        </div>
                      </div>
                    </div> <br />
                    <button className="btn btn-danger btn-block" onClick={this.confirmOrder}>CONFIRMAR PEDIDO</button> <br />
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

export default MyOrderModal;
