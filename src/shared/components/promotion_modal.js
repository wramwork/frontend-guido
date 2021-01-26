import React, { Component } from 'react';
import Dropdown from "./dropdown";
import CartOperation from "../../core/utility/cart";


class PromotionModal extends Component {  
  constructor(props){
    super(props)
    this.CartOperation = new CartOperation()
  }
  state = {
    quantity: 0
  }

  removeModal = () => {
    this.props.closeModal()
    this.setState({quantity: 0})
  }
  add_to_cart = async() => {
    var cartData = {
      data: this.props.selectedData,
      quantity: this.state.quantity
    }
    await this.CartOperation.setNewCartElement(cartData)
    this.removeModal()
  }
  handleState = (value) => {
    this.setState({
      quantity: value
    })
  }
  render() {
    const { visible } = this.props;
    return (
      <React.Fragment>
        {visible ? (
          <section className="modal3" >
            <div className="modal fade" data-backdrop="false" id="myModal3" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
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
                        <div className="col-lg-12 col-md-12 col-sm-12 ">
                          <h1 className="caret"> <strong>CANTIDAD</strong></h1>
                          <Dropdown limit={11} quantity={this.handleState}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <input className="btn btn-danger btn-block" type="submit" value="AGREGAR A MI PEDIDO" data-dismiss="modal" onClick={this.add_to_cart}/>
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

export default PromotionModal;
