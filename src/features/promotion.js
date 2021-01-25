import React, { Component } from 'react';
import PromotionModal from "../shared/components/promotion_modal";
import PromotionsCard from "../shared/components/promotion_card";
import ApiGateway from "../core/apis/ApiGateway";
import Common from "../core/utility/common";
import * as myConstClass from "../core/utility/constants";

class Promotions extends Component {
    style = {
        banner_slide: {
            width: '100%'
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            promotionData: [],
            visible: false,
            selectedData: {}
        };
        this.api_gateway = new ApiGateway(myConstClass.GET_PROMOTIONS)
        this.common = new Common()
    }

    async componentDidMount() {
        this.setState(
            {
                isLoaded: true,
                promotionData: await this.api_gateway.getData()
            }
        )

    }
    handleModalOpen = (data) => {
        this.setState({
            visible: true,
            selectedData: data
        })
    }
    dismissable = () => {
        this.setState({
            visible: false,
            selectedData: {},
        })
    }
    render() {
        const { error, isLoaded, visible, selectedData} = this.state;
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
                                this.common.slice_object(this.state.promotionData, 4).map(ele => {
                                    return (
                                        <div className="row">
                                            <PromotionsCard promotionData={ele} openModal={this.handleModalOpen}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                    <PromotionModal visible={visible} closeModal={this.dismissable} selectedData={selectedData}/>
                </>
            );
        }
    }
}

export default Promotions