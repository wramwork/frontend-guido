import React, { Component } from 'react';
import OtherMealsData from "../shared/components/other_meals_data";
import ApiGateway from "../core/apis/ApiGateway";
import * as myConstClass from "../core/utility/constants";

class OtherMeals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            milanesas: [],
            sandwiches: [],
            platos: [],
            tartas: [],
            bebidas: []

        };
        this.api_gateway = new ApiGateway()
    }

    async componentDidMount() {
        this.setState(
            {
                milanesas: await this.getMilanesas(),
                sandwiches: await this.getSandwiches(),
                platos: await this.getPlatos(),
                tartas: await this.getTartas(),
                bebidas: await this.getBebidas(),
                isLoaded: true
            }
        )
    }

    async getMilanesas(){
        return await this.api_gateway.getData(myConstClass.GET_MILANESAS);
    }
    async getSandwiches(){
        return await this.api_gateway.getData(myConstClass.GET_SANDWICHES);
    }
    async getPlatos(){
        return await this.api_gateway.getData(myConstClass.GET_PLATOS);
    }
    async getTartas(){
        return await this.api_gateway.getData(myConstClass.GET_TARTAS);
    }
    async getBebidas(){
        return await this.api_gateway.getData(myConstClass.GET_BEBIDAS);
    }

    render() {
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {
        return (
            <>
                <a name="otrascomidas"></a>
                <section className="otras-comidas">
                    <h1><strong>OTRAS COMIDAS</strong></h1>
                    {/* milanesas */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12">
                                <h3><strong> MILANESAS AL PLATO</strong> </h3>
                                <ul><OtherMealsData data={this.state.milanesas} /></ul>
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* <!--sandwiches  --> */}
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 col-md-12 mb-12">
                                <h3><strong> SANDWICHES EN PAN DE PIZZA</strong> </h3>
                                <ul><OtherMealsData data={this.state.sandwiches} /></ul>
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* <!-- platos --> */}
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12 col-md-12 mb-12">
                                <h3><strong>PLATOS CASEROS</strong> </h3>
                                <ul><OtherMealsData data={this.state.platos} /></ul>
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* <!-- tartas--> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12">
                                <h3><strong> TARTAS INDIVIDUALES</strong> </h3>
                                <ul><OtherMealsData data={this.state.tartas} /></ul>
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* <!-- bebidas --> */}
                    <a name="bebidas"></a>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 mb-12">
                                <h3><strong> BEBIDAS</strong> </h3>
                                <ul><OtherMealsData data={this.state.bebidas} /></ul>
                            </div>
                        </div>
                    </div>
                </section> <br /> <br />
            </>
        );
    }
}
}

export default OtherMeals