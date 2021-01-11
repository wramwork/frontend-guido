import React, {Component} from 'react';

class PizzasModal extends Component {

  render() {
    return (
        <section className="modal2">
        <div className="modal fade" data-backdrop="false" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
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
                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                      <h1 className="pizza-tamaño"><strong>CHICA</strong></h1>
                      <h2 className="pizza-precio"> <strong>$350</strong></h2>
                      <span className="caret"> <strong>CANTIDAD</strong></span><select name="opciones" className="btn btn-danger btn-sm" aria-placeholder="0"> 
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
                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                      <h1 className="pizza-tamaño"> <strong>GRANDE</strong></h1>
                      <h2 className="pizza-precio"> <strong>$540</strong></h2>
                      <span className="caret"><strong>CANTIDAD</strong></span><select name="opciones" className="btn btn-danger btn-sm" aria-placeholder="0"> 0
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

export default PizzasModal;
