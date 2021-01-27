import React, { Component } from 'react';

export default class Dropdown extends Component {

    constructor(props) {
        super(props)
        this.state ={
            selected:this.props.selected
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

      dropdown = (limit, selected) => {
        let rows = [];
        for (let i = 0; i < limit; i++) {
            if (i===selected) {
                rows.push(<option key={i} selected>{i}</option>)
            }
            else{
                rows.push(<option key={i}>{i}</option>)
            }
        }
        return rows
      }
    render() {
        const {limit, selected} = this.props;
        return (
                <>
                    <select className="btn btn-danger  btn-sm" onChange={this.handleChange}>
                        {
                            this.dropdown(limit, selected)
                        }
                    </select>
                </>
        )
    }
}

