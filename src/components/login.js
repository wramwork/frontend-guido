import React, {Component} from 'react';

class LoginModal extends Component {

  render() {
    return (
      <section class="modal5">
      <div class="modal fade" data-backdrop="false" id="myModal5" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >
        <div class="modal-dialog modal-md" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#login" aria-controls="Log In" role="tab" data-toggle="tab"><strong>INICIAR SESIÓN</strong></a></li>
                <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"> <strong>REGISTRARSE</strong> </a></li>
              </ul>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane active form-are" id="login">
                    <form action="">
                        <div class="form-bor">
                            <div class="form-input-group">
                                <label for="">Mail</label> <br/>
                                <input type="text" name="username" />
                            </div>

                            <div class="form-input-group">
                                <label for="">Contraseña</label> <br/>
                                <input type="password" name="password" />
                            </div> <br/>
                            
                            <div class="form-input-group">
                                <button class="btn btn-danger btn-md">ACEPTAR</button> <br/> <br/>

                                <a class="forgot-pass" href="">¿Olvidaste tu contraseña?</a> 
                            </div>
                            
                        </div>
                    </form>

                </div>
                <div role="tabpanel" class="tab-pane" id="profile">
                    <form action="">
                        <div class="form-bor">
                            <div class="form-input-group">
                                <label for="">Nombre y Apellido</label> <br/>
                                <div class="row">
                                    <div class="col-md-6">
                                        <input type="text" name="fst-username" placeholder="Nombre" />
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" name="lst-username" placeholder="Apellido" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-input-group">
                                <label for="">Mail</label> <br/>
                                <input type="text" name="email" placeholder="" />
                            </div>
                            <div class="form-input-group">
                                <label for="">Contraseña</label> <br/>
                                <input type="password" name="password" placeholder="" />
                            </div>
                            <div class="form-input-group">
                              <label for="">Dirección</label> <br/>
                              <input type="text" name="email" placeholder="" />
                          </div>
                            <div class="form-input-group">
                              <label for="">Número de telefono</label> <br/>
                              <input type="text" name="email" placeholder="" />
                          </div>
                            <div class="form-input-group"> <br/>
                                <button class="btn btn-danger btn-md">REGISTRARME</button>
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
