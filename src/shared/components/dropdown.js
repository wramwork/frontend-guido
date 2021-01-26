import React, { Component } from 'react';

export default class Dropdown extends Component {

    constructor(props) {
        super(props)
        this.state ={
            selected:0
        }

    }
    handleChange = (e) => {
        this.setState({selected: e.target.value})
        var name = "quantity"
        if (this.props.name)
        name = this.props.name
        if (this.props.quantity)
        this.props.quantity(e.target.value, name);
      }  
    
      setDefault = ()=>{
          this.setState({selected:0})
          this.render()
          console.log(this.state)
      }

      dropdown = (limit) => {
        let rows = [];
        for (let i = 0; i < limit; i++) {
            if (i===this.state.selected) {
                rows.push(<option selected>{this.state.selected}</option>)
            }
            else{
                rows.push(<option>{i}</option>)
            }
        }
        return rows
      }
    render() {
        const {limit} = this.props;
        return (
                <>
                    <select className="btn btn-danger  btn-sm" onChange={this.handleChange}>
                        {
                            this.dropdown(limit)
                        }
                    </select>
                </>
        )
    }
}

