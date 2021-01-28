import React, { Component } from 'react';
import ApiGateway from "../../core/apis/ApiGateway";
import StorageGateway from "../../core/utility/storage-gateway";
import * as myConstClass from "../../core/utility/constants";
import Common from "../../core/utility/common";

const validEmailRegex =
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class LoginModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      direction: "",
      phone: "",
      repeatedPassword: "",
      email: "",
      iserror: false,
      showError: false,
      errors: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        direction: "",
        phone: "",
        repeatedPassword: "",
        email: ""
      }
    }
    this.api_gateway = new ApiGateway();
    this.handleChange = this.handleChange.bind(this)
    this.register = this.register.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.login = this.login.bind(this)
    this.common = new Common()
  }

  async register(e) {
    e.preventDefault();
    let current = new Date()
    let data = {
      "email": this.state.email,
      "fullName": this.state.firstname + this.state.lastname,
      "address": this.state.direction,
      "phone": this.state.phone,
      "username": this.state.username,
      "password": this.state.password,
      "repeatedPassword": this.state.repeatedPassword,
      "registrationTime": current.toLocaleString(),
      "accessToken": "abcd",
      "expirationInSeconds": 100,
      "refreshToken": "efgh"
    }
    await this.validate()
    if (this.state.iserror) {
      this.setState({ showError: true })
    }
    else {
      data = await this.api_gateway.postData(myConstClass.SIGNUP, data)
      const authToken = 'Bearer ' + data.accessToken;
      StorageGateway.set("authToken", authToken);
      StorageGateway.set("refreshToken", data.refreshToken);
      StorageGateway.set("expiredTime", new Date(new Date().setSeconds(new Date().getSeconds() + data.expirationInSeconds)));
      this.closeModal()
    }
  }

  validate = async() => {
    if (this.state.email == "")
    {
      this.setState({
        iserror: true,
      })
      let state = this.state
      state.errors.email = "Email can not be Empty"
    }
    if (this.state.password == ""){
      this.setState({
        iserror: true,
      })
      let state = this.state
      state.errors.password = "Password must be 8 characters long!"
    }
    if (this.state.username == ""){
      this.setState({
        iserror: true,
      })
      let state = this.state
      state.errors.username = "Username can not be empty"
    }
  }

  async login(e) {
    e.preventDefault();
    var data = {
      "username": this.state.username,
      "password": this.state.password,
      "email": this.state.email,
      "accessToken": "hdhdhdhdhdhdh",
      "expirationInSeconds": 100,
      "refreshToken": "efgh"
    }
    await this.validate()
    if (this.state.iserror) {
      this.setState({ showError: true })
    }
    else {
      data = await this.api_gateway.postData(myConstClass.LOGIN, data)
      const authToken = 'Bearer ' + data.accessToken;
      StorageGateway.set("authToken", authToken);
      StorageGateway.set("refreshToken", data.refreshToken);
      StorageGateway.set("expiredTime", new Date(new Date().setSeconds(new Date().getSeconds() + data.expirationInSeconds)));
      this.setState({ iserror: false })
      this.closeModal()
    }
    console.log(this.state)
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({showError: false})
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
    let errors = this.state.errors
    switch (name) {
      case 'firstname':
        errors.firstname =
          value.length < 3
            ? 'Firstname must be 3 characters long!'
            : '';
        if (errors)
          this.setState({ iserror: true })
        break;
      case 'lastname':
        errors.lastname =
          value.length < 3
            ? 'Lastname must be 3 characters long!'
            : '';
        break;
      case 'username':
        errors.username =
          value.length < 3
            ? 'username must be 3 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        if (errors)
          this.setState({ iserror: true })
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      case 'repeatedPassword':
        errors.repeatedPassword =
          value != this.state.password
            ? 'Repeated Password must be equal to password'
            : '';
        break;
      case 'direction':
        errors.direction =
          value.length < 3
            ? 'Direction must be greater than 3 length'
            : '';
        break;
      case 'phone':
        errors.phone =
          value.length < 3
            ? 'phone must be greater than 3 length'
            : '';
        break;
      default:
        break;
    }
    console.log(this.state.errors)
  }
  clearState = () => {
    this.setState({
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      direction: "",
      phone: "",
      repeatedPassword: "",
      email: "",
      iserror: false,
      showError: false,
      errors: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        direction: "",
        phone: "",
        repeatedPassword: "",
        email: ""
      }
    })
  }
  closeModal() {
    this.clearState()
    this.common.setbody()
    this.props.handle("loginModal")
  }

  render() {
    const { visible } = this.props;
    return (

      <React.Fragment>
        {visible ? (
          <section className="modal5">
            <div className="modal fade" data-backdrop="false" id="myModal5" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
              <div className="modal-dialog modal-md" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className="active"><a href="#login" aria-controls="Log In" role="tab" data-toggle="tab" onClick={this.clearState}><strong>INICIAR SESIÓN</strong></a></li>
                      <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" onClick={this.clearState}> <strong>REGISTRARSE</strong> </a></li>
                    </ul>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div className="modal-body">
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active form-are" id="login">
                        <div className="form-bor">
                          <div className="form-input-group">
                            <label>Mail</label> <br />
                            <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.email}</label>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                          </div>

                          <div className="form-input-group">
                            <label>Contraseña</label> <br />
                            <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.password}</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                          </div> <br />

                          <div className="form-input-group">
                            <button className="btn btn-danger btn-md" onClick={this.login} >ACEPTAR</button> <br /> <br />

                            <a className="forgot-pass" >¿Olvidaste tu contraseña?</a>
                          </div>

                        </div>

                      </div>
                      <div role="tabpanel" className="tab-pane" id="profile">
                        <div className="form-bor">
                          <div className="form-input-group">
                            <label>Nombre y Apellido</label> <br />
                            <div className="row">
                              <div className="col-md-6">
                                <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.firstname}</label>
                                <input type="text" name="firstname" placeholder="Nombre" value={this.state.firstname} onChange={this.handleChange} />
                              </div>
                              <div className="col-md-6">
                                <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.lastname}</label>
                                <input type="text" name="lastname" placeholder="Apellido" value={this.state.lastname} onChange={this.handleChange} />
                              </div>
                            </div>
                          </div>

                          <div className="form-input-group">
                            <label>Mail</label> <br />
                            <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.email}</label>
                            <input type="text" name="email" placeholder="" value={this.state.email} onChange={this.handleChange} />
                          </div>
                          <div className="form-input-group">
                            <label>Nombre de usuario</label> <br />
                            <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.username}</label>
                            <input type="text" name="username" placeholder="" value={this.state.username} onChange={this.handleChange} />
                          </div>
                          <div className="form-input-group">
                            <label>Contraseña</label> <br />
                            <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.password}</label>
                            <input type="password" name="password" placeholder="" value={this.state.password} onChange={this.handleChange} />
                          </div>
                          <div className="form-input-group">
                            <label>Confirmar contraseña</label> <br />
                            <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.repeatedPassword}</label>
                            <input type="password" name="repeatedPassword" placeholder="" value={this.state.repeatedPassword} onChange={this.handleChange} />
                          </div>
                          <div className="form-input-group">
                            <label>Dirección</label> <br />
                            <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.direction}</label>
                            <input type="text" name="direction" placeholder="" value={this.state.direction} onChange={this.handleChange} />
                          </div>
                          <div className="form-input-group">
                            <label>Número de telefono</label> <br />
                            <label style={{ color: 'red' }}>{this.state.showError && this.state.errors.phone}</label>
                            <input type="text" name="phone" placeholder="" value={this.state.phone} onChange={this.handleChange} />
                          </div>
                          <div className="form-input-group"> <br />
                            <button className="btn btn-danger btn-md" onClick={this.register} >REGISTRARME</button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </React.Fragment>

    );

  }
}

export default LoginModal;
