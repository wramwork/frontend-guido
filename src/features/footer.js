import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <>
                <footer id="footer">
                    <ul className="icons">
                        <li><a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank" rel="noreferrer"><img src="imagenes/iconos/instragram.svg" alt="" className="redes-footer"></img></a></li>
                        <li><a href="https://www.facebook.com/PizzeriaLosMirasoles" target="_blank" rel="noreferrer"><img src="imagenes/iconos/facebook.svg" alt="" className="redes-footer"></img></a></li>
                    </ul> <br />
                    <ul className="copyright">
                        <li>&copy; Los Mirasoles - Todos los derechos reservados</li>
                    </ul>
                </footer>
            </>
        );
    }
}

export default Footer