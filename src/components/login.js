import React, {Component} from 'react';

class LoginModal extends Component {

  render() {
    return (
      <section className="modal5">
      <div className="modal fade" data-backdrop="false" id="myModal5" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active"><a href="#login" aria-controls="Log In" role="tab" data-toggle="tab"><strong>INICIAR SESIÓN</strong></a></li>
                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"> <strong>REGISTRARSE</strong> </a></li>
              </ul>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active form-are" id="login">
                    <form action="">
                        <div className="form-bor">
                            <div className="form-input-group">
                                <label>Mail</label> <br/>
                                <input type="text" name="username" />
                            </div>

                            <div className="form-input-group">
                                <label>Contraseña</label> <br/>
                                <input type="password" name="password" />
                            </div> <br/>
                            
                            <div className="form-input-group">
                                <button className="btn btn-danger btn-md">ACEPTAR</button> <br/> <br/>

                                <a className="forgot-pass" href="">¿Olvidaste tu contraseña?</a> 
                            </div>
                            
                        </div>
                    </form>

                </div>
                <div role="tabpanel" className="tab-pane" id="profile">
                    <form action="">
                        <div className="form-bor">
                            <div className="form-input-group">
                                <label>Nombre y Apellido</label> <br/>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="fst-username" placeholder="Nombre" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" name="lst-username" placeholder="Apellido" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-input-group">
                                <label>Mail</label> <br/>
                                <input type="text" name="email" placeholder="" />
                            </div>
                            <div className="form-input-group">
                                <label>Contraseña</label> <br/>
                                <input type="password" name="password" placeholder="" />
                            </div>
                            <div className="form-input-group">
                              <label>Dirección</label> <br/>
                              <input type="text" name="email" placeholder="" />
                          </div>
                            <div className="form-input-group">
                              <label>Número de telefono</label> <br/>
                              <input type="text" name="email" placeholder="" />
                          </div>
                            <div className="form-input-group"> <br/>
                                <button className="btn btn-danger btn-md">REGISTRARME</button>
                            </div>
                        </div>

                    </form>
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

export default LoginModal;
