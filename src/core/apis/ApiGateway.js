export default class ApiGateway {
    // configEndpoint = "https://wram-app-backend.herokuapp.com/";
    configEndpoint = "http://localhost:3000/";
    constructor(config) {
    this.configEndpoint = this.configEndpoint + config;
    }
    getData = async (url="") => {
        try {
            var endpoint = this.configEndpoint
            if (url) {
                endpoint = endpoint + `/${url}`
            }
            const response = await fetch(endpoint)
            const data = await response.json()
            return data
        } catch (err) {
           console.log(err)
        } 
    }
    postData = async (url="",body) => {
        try {
            let requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            };
            var endpoint = this.configEndpoint
            if (url) {
                endpoint = endpoint + `/${url}`
            }
            const response = await fetch(endpoint,requestOptions)
            const data = await response.json()
            return data
        } catch (err) {
           console.log(err)
        } 
    }
}
        