import React, { Component } from 'react';

export default class Dropdown extends Component {

    constructor(props) {
        super(props)
    }
    handleChange = (e) => {
        this.props.quantity(e.target.value);
      }    
    render() {
        const {limit} = this.props;
        return (
                <>
                    <select name="" className="btn btn-danger  btn-sm" onChange={this.handleChange}>
                        {
                            (() => {
                                let rows = [];
                                for (let i = 0; i < limit; i++) {
                                    if (i===0) {
                                        rows.push(<option selected>{i}</option>)
                                    }
                                    else{
                                        rows.push(<option>{i}</option>)
                                    }
                                }
                                return rows
                            })()
                        }
                    </select>
                </>
        )
    }
}

