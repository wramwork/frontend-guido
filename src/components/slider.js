import React, { Component } from 'react';


class Slider extends Component {
    style = {
        banner_slide : {
            width : '100%'
        }
    }
    render() {
        return (
            // <!-- Slider -->
            <>
                <section className="carrousel">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="imagenes/portada2.jpg" className="d-block w-100" alt="pizza muzarella" />
                            </div>
                            <div className="carousel-item">
                                <img src="imagenes/portada1.jpg" className="d-block w-100" alt="pizza napolitana" />
                            </div>
                            <div className="carousel-item">
                                <img src="imagenes/portada.jpg" className="d-block w-100" alt="empanadas y canastitas" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>

                <section className="banner">
                    <img src="imagenes/iconos/gj.png" alt="" style={ this.style.banner_slide }></img>
                </section>
            </>
        );
    }
}

export default Slider