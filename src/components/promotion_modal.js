import React, {Component} from 'react';

class PromotionModal extends Component {

  render() {
    return (
        <section class="modal3">
        <div class="modal fade" data-backdrop="false" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >
          <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 ">
                      <h1 class="caret"> <strong>CANTIDAD</strong></h1>
                      <select name="opciones" class="btn btn-danger btn-sm" aria-placeholder="0"> 
                        <option selected>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <input class="btn btn-danger btn-block" type="submit" value="AGREGAR A MI PEDIDO" />
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
