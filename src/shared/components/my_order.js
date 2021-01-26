import React, { Component } from 'react';
import ApiGateway from "../../core/apis/ApiGateway";
import * as myConstClass from "../../core/utility/constants";


class MyOrderModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clarifications: "",
      direction: "",
      number: "",
      department: ""
    }
    this.api_gateway = new ApiGateway();
    this.handleChange = this.handleChange.bind(this)
    this.confirmOrder = this.confirmOrder.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  async confirmOrder(e) {
    e.preventDefault();
    var data = {
      "clarifications": this.state.clarifications,
      "direction": this.state.direction,
      "number": this.state.number,
      "department": this.state.department
    }
    data = await this.api_gateway.postData(myConstClass.CONFIRM_ORDER, data)
    this.closeModal()
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  closeModal() {
    this.props.handle("myOrderModal")
    this.setState({
      clarifications: "",
      direction: "",
      number: "",
      department: ""
    })
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
                  <form action="" onSubmit={this.confirmOrder}>
                    <input type="text" placeholder=" Aclaraciones" className="aclaraciones" name="clarifications" value={this.state.clarifications} onChange={this.handleChange} /> <br />
                    <div className="form-input-group">
                      <label>DATOS DE ENVIO</label> <br />
                      <input type="text" placeholder=" Dirección" name="direction" value={this.state.direction} onChange={this.handleChange} />
                      <div className="row">
                        <div className="col-md-6">
                          <input type="text" placeholder=" N°" name="number" value={this.state.number} onChange={this.handleChange} />
                        </div>
                        <div className="col-md-6">
                          <input type="text" placeholder=" Depto" name="department" value={this.state.department} onChange={this.handleChange} />
                        </div>
                      </div>
                    </div> <br />
                    <button className="btn btn-danger btn-block" data-dismiss="modal">CONFIRMAR PEDIDO</button> <br />
                  </form>
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
