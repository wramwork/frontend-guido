import React, { Component } from 'react';

export default class Dropdown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }
    render() {
        return (
            this.state.data.map(element => (
                <>
                    <select name="" className="btn btn-danger  btn-sm">
                        {
                            (() => {
                                let rows = [];
                                let limit = 13;
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
                    </select><span className="caret">{element}</span> <br />
                </>
            ))
        )
    }
}

