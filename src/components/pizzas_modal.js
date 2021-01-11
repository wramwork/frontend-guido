import React, {Component} from 'react';

class PizzasModal extends Component {

  render() {
    return (
        <section class="modal2">
        <div class="modal fade" data-backdrop="false" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >
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
                    <div class="col-lg-6 col-md-6 col-sm-6 ">
                      <h1 class="pizza-tamaño"><strong>CHICA</strong></h1>
                      <h2 class="pizza-precio"> <strong>$350</strong></h2>
                      <span class="caret"> <strong>CANTIDAD</strong></span><select name="opciones" class="btn btn-danger btn-sm" aria-placeholder="0"> 
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
                    <div class="col-lg-6 col-md-6 col-sm-6 ">
                      <h1 class="pizza-tamaño"> <strong>GRANDE</strong></h1>
                      <h2 class="pizza-precio"> <strong>$540</strong></h2>
                      <span class="caret"><strong>CANTIDAD</strong></span><select name="opciones" class="btn btn-danger btn-sm" aria-placeholder="0"> 0
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
                      </select> <br />
                    
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

export default PizzasModal;
