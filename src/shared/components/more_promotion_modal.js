import React, { Component } from 'react';
import Dropdown from "./dropdown";

class MorePromotionModal extends Component {

  modelStyle = {
    width: '100%',
    height: '3em'
  }
  state = {
    empanadas: ["Carne suave", "Carne picante", "Jamón y queso", "Queso y cebolla", "Espinaca", "Choclo", "Roquefort"],
    canastitas: ["Panceta y ciruela", "Calabresa", "Napolitana", "Jamón y provolone", "Panceta y provolone", "Rucula", "Pizzita"]
  }
  render() {
    return (
      <section className="modal1">
        <div className="modal fade" data-backdrop="false" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="myModalLabel">¡Elegi tus empanadas o canastitas para la promo!</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
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
                                    <Dropdown limit={13} />
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
                                    <Dropdown limit={13} />
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
                      <input type="text" placeholder="Aclaraciones" style={this.modelStyle}></input>
                    </div>
                  </div>
                </section>
              </div>
              <div className="container">
                <div className="footer">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3">
                      <Dropdown limit={5} />
                      <span className="caret">  Cantidad</span>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9">
                      <button className="btn btn-danger  btn-block" value="AGREGAR A MI PEDIDO">AGREGAR A MI PEDIDO</button>
                    </div>
                  </div> <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MorePromotionModal;