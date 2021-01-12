import React, { Component } from 'react';
import PromotionModal from "./promotion_modal";
import PromotionsCard from "../common/card/promotion_card";

class Promotions extends Component {
    style = {
        banner_slide: {
            width: '100%'
        }
    }

    constructor(props){
        super(props)

        this.state= {
            promotionData :  [
                {
                    "id" : 1,
                    "title" : "Promo amigos",
                    "description" : "Picada de pizzas mas 6 empanadas o canastitas simples.",
                    "price" : "$870",
                    "image": "imagenes/IMAGENES DE PROMOCIONES/muzza + 6 empanadas.jpg"
                },
                {
                    "id" : 2,
                    "title" : "Promo familia",
                    "description" : "24 empanadas o canastitas simples",
                    "price" : "$1368",
                    "image": "imagenes/IMAGENES DE PROMOCIONES/12 de carne.jpg"
                },
                {
                    "id" : 3,
                    "title" : "Tartas individuales",
                    "description" : "De pollo, de jamón y queso, de espinaca, de queso y cebolla o de champignon",
                    "price" : "$270",
                    "image": "imagenes/IMAGENES DE PROMOCIONES/tartas.jpg"
                },
                {
                    "id" : 4,
                    "title" : "Mila completa en pan de pizza",
                    "description" : "Muzzarella, jamón, tomate, huevo y guarnición.",
                    "price" : "$390",
                    "image": "imagenes/IMAGENES DE PROMOCIONES/milanesa sandwich.jpg"
                },
                {
                    "id" : 5,
                    "title" : "Promo muzza y faina",
                    "description" : "1 grande de Muzzarella mas cuatro porciones de faina.",
                    "price" : "$270",
                    "image": "imagenes/IMAGENES DE PROMOCIONES/muzza + faina.jpg"
                },
                {
                    "id" : 6,
                    "title" : "Promo familia",
                    "description" : "24 empanadas o canastitas simples",
                    "price" : "$1368",
                    "image": "imagenes/IMAGENES DE PROMOCIONES/12 de carne.jpg"
                },
                {
                    "id" : 7,
                    "title" : "Tartas individuales",
                    "description" : "De pollo, de jamón y queso, de espinaca, de queso y cebolla o de champignon",
                    "price" : "$270",
                    "image": "imagenes/IMAGENES DE PROMOCIONES/tartas.jpg"
                },
                {
                    "id" : 8,
                    "title" : "Mila completa en pan de pizza",
                    "description" : "Muzzarella, jamón, tomate, huevo y guarnición.",
                    "price" : "$390",
                    "image": "imagenes/IMAGENES DE PROMOCIONES/milanesa sandwich.jpg"
                }
            ]
        }
    }

    promotionRowData = (arr, size) =>{
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    }

    render() {
        return (
            <>
            <section className="promos-mas-vendidas">
                <h1><strong>PROMOCIONES MÁS VENDIDAS</strong></h1>
                <div className="container">
                    {
                        this.promotionRowData(this.state.promotionData,4).map(ele=>{
                            return (
                                <div className="row">
                                    <PromotionsCard promotionData = {ele}/>
                                </div>
                            )
                        })
                    }
                </div>  
            </section>  
            <PromotionModal />
            </>
        );
    }
}

export default Promotions