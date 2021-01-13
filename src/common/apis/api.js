export default class ApiGateway {
    configEndpoint = "http://localhost:3000/";
    constructor(config) {
    this.configEndpoint = this.configEndpoint + config;
    }
    getData = async () => {
        try {
            const response = await fetch(this.configEndpoint)
            const data = await response.json()
            return data
        } catch (err) {
           console.log(err)
        } 
    }
}
        