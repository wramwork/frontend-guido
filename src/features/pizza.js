import React, { Component } from 'react';
import PizzasModal from "../shared/components/pizzas_modal";
import PizzaData from "../shared/components/pizza_data";
import ApiGateway from "../core/apis/ApiGateway";
import * as myConstClass from "../core/utility/constants";

class Pizza extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            pizzasData: [],
            visible: false,
            selectedData: {},
        };
        this.api_gateway = new ApiGateway(myConstClass.GET_PIZZAS)
    }

    async componentDidMount() {
        let data = await this.api_gateway.getData();
        if (data) {
            this.setState(
                {
                    isLoaded: true,
                    pizzasData: data
                }
            )
        }
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
        const { error, isLoaded, visible, selectedData } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                    <a name="pizzas"></a>
                    <section className="pizzas">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-11 col-md-11 mb-11">
                                    <h1><strong>Pizzas </strong> </h1>
                                    <ul>{<PizzaData data={this.state.pizzasData} openModal={this.handleModalOpen}/>}</ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <PizzasModal visible={visible} closeModal={this.dismissable} selectedData={selectedData}/>
                </>
            )
        }
    }
}


export default Pizza