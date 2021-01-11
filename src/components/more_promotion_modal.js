import React, { Component } from 'react';

class MorePromotionModal extends Component {

  modelStyle = {
    width: '100%',
    height: '3em'
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
                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Carne suave</span> <br />
                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Carne picante</span> <br />
                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Jamón y queso</span> <br />
                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Queso y cebolla</span> <br />
                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Espinaca</span> <br />
                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Choclo</span> <br />
                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Roquefort</span> <br />
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
                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Panceta y ciruela</span> <br />
                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Calabresa</span> <br />
                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Napolitana</span> <br />
                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select> <span className="caret">Jamón y provolone</span> <br />

                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Panceta y provolone</span> <br />

                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Rucula</span> <br />

                                <select name="" className="btn btn-danger btn-sm" aria-placeholder="0">
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
                                  <option>11</option>
                                  <option>12</option>
                                </select><span className="caret">Pizzita</span> <br />

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
                      <select name="opciones" className="btn btn-danger btn-sm" aria-placeholder="0">
                        <option selected>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select><span className="caret">  Cantidad</span>
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