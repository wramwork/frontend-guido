import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <>
                <footer id="footer">
                    <ul class="icons">
                        <li><a href="https://www.instagram.com/pizzerialosmirasoles/?hl=en " target="_blank"><img src="imagenes/iconos/instragram.svg" alt="" class="redes-footer"></img></a></li>
                        <li><a href="https://www.facebook.com/PizzeriaLosMirasoles" target="_blank"><img src="imagenes/iconos/facebook.svg" alt="" class="redes-footer"></img></a></li>

                    </ul> <br />
                    <ul class="copyright">
                        <li>&copy; Los Mirasoles - Todos los derechos reservados</li>
                    </ul>
                </footer>
            </>
        );
    }
}

export default Footer