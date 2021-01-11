import React, {Component} from 'react';

class MyOrderModal extends Component {

  render() {
    return (
        <section class="modal4">
        <div class="modal fade" data-backdrop="false" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >
          <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
              <div class="modal-header">
                 <h3><strong>MI PEDIDO</strong></h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div class="modal-body">
                <input type="text" placeholder=" Aclaraciones" class="aclaraciones" /> <br />
                <div class="form-input-group">
                  <label for="">DATOS DE ENVIO</label> <br />
                  <input type="text" placeholder=" Dirección" />
                  <div class="row">
                      <div class="col-md-6">
                          <input type="text" placeholder=" N°" />
                      </div>
                      <div class="col-md-6">
                          <input type="text"  placeholder=" Depto" />
                      </div>
                  </div>
                </div> <br />
                <button class="btn btn-danger btn-block">CONFIRMAR PEDIDO</button> <br /> 
              </div>       
            </div>
          </div>
        </div>
      </section>

    );
    
  }
}

export default MyOrderModal;
