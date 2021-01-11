import axios from "axios";
import React, { Component } from "react";
const API_URL = 'http://localhost:3000'

class Api {
    getData = (api) => {
        const url = `${API_URL}/${api}/`
        axios.get(url)
        .then(data=>console.log(data))
        .catch(err=>console.log(err))
    }
}

export default Api;