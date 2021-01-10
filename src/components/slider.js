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
                <section class="carrousel">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="imagenes/portada2.jpg" class="d-block w-100" alt="pizza muzarella" />
                            </div>
                            <div class="carousel-item">
                                <img src="imagenes/portada1.jpg" class="d-block w-100" alt="pizza napolitana" />
                            </div>
                            <div class="carousel-item">
                                <img src="imagenes/portada.jpg" class="d-block w-100" alt="empanadas y canastitas" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </section>

                <section class="banner">
                    <img src="imagenes/iconos/gj.png" alt="" style={ this.style.banner_slide }></img>
                </section>
            </>
        );
    }
}

export default Slider