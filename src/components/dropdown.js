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
                    <select name="" className="btn btn-danger  btn-sm" aria-placeholder="0">
                        <option selected>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select><span className="caret">{element}</span> <br />
                </>
            ))
        )
    }
}

