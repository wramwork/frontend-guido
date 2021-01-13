import React, { Component } from 'react';
import MorePromotionModal from './more_promotion_modal'
import MorePromotionData from "./more_promotion_data";
import ApiGateway from "../common/apis/api";

class MorePromotion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            promotionData: []
        };
        this.api_gateway = new ApiGateway("more_promotion")
    }

    async componentDidMount() {
        this.setState(
            {
                isLoaded: true,
                promotionData: await this.api_gateway.getData()
            }
        )
    }
    promotionRowData = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                    <section className="promos-mas-vendidas">
                        <h1><strong>PROMOCIONES MÁS VENDIDAS</strong></h1>
                        <div className="container">
                            {
                                this.promotionRowData(this.state.promotionData, 2).map(ele => {
                                    return (
                                        <div className="row">
                                            <MorePromotionData promotionData={ele} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                    <MorePromotionModal />
                </>
            );
        }

    }
}

export default MorePromotion