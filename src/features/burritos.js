import React, { Component } from 'react';
import ApiGateway from "../core/apis/ApiGateway";
import BasketCard from "../shared/components/basket_card";
import Common from "../core/utility/common";
import * as myConstClass from "../core/utility/constants";

export default class Basket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      empanadasData: [],
      canastitasData: []
    };
    this.api_gateway = new ApiGateway()
    this.common = new Common();
  }

  async componentDidMount() {
    this.setState(
      {
        isLoaded: true,
        empanadasData: await this.getEmpanadas(),
        canastitasData: await this.getCanastitas()
      }
    )
  }

  render() {
    return (
      <>

        {
           
        }

        <a name="empanadas"></a>
        <section className="empanadas">
          <div className="container">
            {this.common.slice_object(this.state.empanadasData, 2).map(ele => {
              return (
                <div className="row">
                  < BasketCard key = {ele.id} basketdata={ele} />
                </div>
              )
            })
            }
          </div>
        </section>

        <a name="canastitas"></a>
        <section className="canastitas">
          <div className="container">
            {this.common.slice_object(this.state.canastitasData, 2).map(ele => {
              return (
                <div className="row">
                  < BasketCard key = {ele.id} basketdata={ele} />
                </div>
              )
            })
            }
          </div>
        </section>

      </>
    );
  }

  async getEmpanadas() {
    return await this.api_gateway.getData(myConstClass.GET_EMPANADAS)
  }

  async getCanastitas() {
    return await this.api_gateway.getData(myConstClass.GET_CANASTITAS)
  }

}