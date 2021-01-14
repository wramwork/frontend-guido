import React, { Component } from 'react';


class Slider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carouselData: [
                {
                    imgsrc: 'imagenes/portada2.jpg',
                    alt: 'pizza muzarella'
                },
                {
                    imgsrc: 'imagenes/portada1.jpg',
                    alt: 'pizza napolitana'
                },
                {
                    imgsrc: 'imagenes/portada.jpg',
                    alt: 'empanadas y canastitas'
                }
            ],
            banner: [
                {
                    imgsrc: 'imagenes/iconos/gj.png',
                    alt: 'banner-image gj'
                }
            ]
        }
    }
    style = {
        banner_slide: {
            width: '100%'
        }
    }
    render() {
        return (
            <>
                <section className="carrousel">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {
                                (() => {
                                    const row = [];
                                    for (let i = 0; i < this.state.carouselData.length; i++) {
                                        let ele = (i === 0 ? 'carousel-item active' : 'carousel-item')
                                        row.push(
                                            <div className={ele}>
                                                <img src={this.state.carouselData[i].imgsrc} className="d-block w-100" alt={this.state.carouselData[i].alt} />
                                            </div>
                                        )
                                    }
                                    return row;
                                })()
                            }
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
                    {
                        this.state.banner.map(ele => {
                            return <img src={ele.imgsrc} alt={ele.alt} style={this.style.banner_slide}></img>
                        })
                    }
                </section>
            </>
        );
    }
}

export default Slider