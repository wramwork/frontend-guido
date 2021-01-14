import React, {Component} from 'react';

class MyOrderModal extends Component {

  render() {
    return (
        <section className="modal4">
        <div className="modal fade" data-backdrop="false" id="myModal4" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                 <h3><strong>MI PEDIDO</strong></h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div className="modal-body">
                <input type="text" placeholder=" Aclaraciones" className="aclaraciones" /> <br />
                <div className="form-input-group">
                  <label>DATOS DE ENVIO</label> <br />
                  <input type="text" placeholder=" Dirección" />
                  <div className="row">
                      <div className="col-md-6">
                          <input type="text" placeholder=" N°" />
                      </div>
                      <div className="col-md-6">
                          <input type="text"  placeholder=" Depto" />
                      </div>
                  </div>
                </div> <br />
                <button className="btn btn-danger btn-block">CONFIRMAR PEDIDO</button> <br /> 
              </div>       
            </div>
          </div>
        </div>
      </section>

    );
    
  }
}

export default MyOrderModal;
