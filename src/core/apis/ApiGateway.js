import StorageGateway from "../utility/storage-gateway";
import * as myConstClass from "../utility/constants";


export default class ApiGateway {
    configEndpoint = "https://wram-app-backend.herokuapp.com/";
    // configEndpoint = "http://localhost:3000/";
    constructor(config) {
        if (config)
            this.configEndpoint = this.configEndpoint + config;
    }
    getHeaders = async (url) => {
        let headers = {}
        if (myConstClass.AUTHENTICATION_REQUIRED.includes(url)) {
            const authToken = await this.getToken()
            if (authToken) {
                headers['Authorization'] = `${authToken}`;
            }
        }
        return headers;
    }
    getData = async (url = "") => {
        try {
            var headers = await this.getHeaders(url);
            headers['Content-Type'] = 'application/json'
            var endpoint = this.configEndpoint
            if (url) {
                endpoint = endpoint + url
            }
            const response = await fetch(endpoint)
            const data = await response.json()
            return data
        } catch (err) {
            console.log(err)
        }
    }
    postData = async (url = "", body) => {
        try {
            var endpoint = this.configEndpoint
            if (url) {
                endpoint = endpoint + url
            }
            var headers = await this.getHeaders(url);
            headers['Content-Type'] = 'application/json'
            let requestOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            };
            const response = await fetch(endpoint, requestOptions)
            console.log(response)
            const data = await response.json()
            return data
        } catch (err) {
            console.log(err)
        }
    }
    getToken = async () => {
        const authToken = StorageGateway.get("authToken")
        const expiredTime = new Date(StorageGateway.get("expiredTime"))
        if (!authToken) {
            return null;
        }
        if (expiredTime && expiredTime < new Date()) {
            var body = { "refreshToken": StorageGateway.get("authToken") }
            var data = this.postData(myConstClass.TOKEN_UPDATE, body)
            data = {
                "accessToken": "hdhdhdhdhdhdh",
                "expirationInSeconds": 100,
                "refreshToken": "efgh"
            }
            const authToken = 'Bearer ' + data.accessToken;
            StorageGateway.set("authToken", authToken);
            StorageGateway.set("refreshToken", data.refreshToken);
            StorageGateway.set("expiredTime", new Date(new Date().setSeconds(new Date().getSeconds() + data.expirationInSeconds)));

        }
        return authToken;
    }
}
