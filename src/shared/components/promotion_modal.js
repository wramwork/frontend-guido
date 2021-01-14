import React, {Component} from 'react';

class PromotionModal extends Component {
  render() {
    return (
        <section className="modal3">
        <div className="modal fade" data-backdrop="false" id="myModal3" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 ">
                      <h1 className="caret"> <strong>CANTIDAD</strong></h1>
                      <select name="opciones" className="btn btn-danger btn-sm"> 
                        {
                            (() => {
                              let rows = [];
                              let limit = 11;
                              for (let i = 0; i < limit; i++) {
                                  if (i===0) {
                                      rows.push(<option selected>{i}</option>)
                                  }
                                  else{
                                      rows.push(<option>{i}</option>)
                                  }
                              }
                              return rows
                          })()
                        }
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <input className="btn btn-danger btn-block" type="submit" value="AGREGAR A MI PEDIDO" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
    
  }
}

export default PromotionModal;
