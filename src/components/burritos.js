import React, { Component } from 'react';
import ApiGateway from "../common/apis/api";
import BasketCard from "./basket_card";

class Basket extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      empanadasData: [],
      canastitasData: []
    };
    this.api_gateway = new ApiGateway("baskets")
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
  promotionRowData = (arr, size) => {
    return Array.from({ length: Math.ceil(arr&&arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  }

  async getEmpanadas(){
    return await this.api_gateway.getData("?type=empanadas")
  }

  async getCanastitas(){
    return await this.api_gateway.getData("?type=canastitas")
  }

  // br = '\n'
  render() {
    return (
      <>
        <a name="empanadas"></a>
        <section className="empanadas">
          <div className="container">

            {this.promotionRowData(this.state.empanadasData, 2).map(ele => {
              return (
                <div className="row">
                  < BasketCard basketdata={ele} />
                </div>
              )
            })
            }
          </div>
        </section>

        <a name="canastitas"></a>
        <section className="canastitas">
        <div className="container">
        {this.promotionRowData(this.state.canastitasData, 2).map(ele => {
              return (
                <div className="row">
                  < BasketCard basketdata={ele} />
                </div>
              )
            })
            }
            </div>
        </section>

      </>
    );
  }
}

export default Basket