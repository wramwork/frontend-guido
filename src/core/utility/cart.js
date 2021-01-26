import StorageGateway from './storage-gateway';
export default class CartOperation{
    key = 'CART';
    constructor(){
        this.createCart()
    }
    createCart = async () =>{
        await StorageGateway.set(this.key,[])
    }

    getAllCartElement = () => {
        StorageGateway.get(this.key)
    }

    setNewCartElement = async (ele) => {
        let data = StorageGateway.get(this.key);
        console.log(data)
        if(data){
            data = JSON.parse(data);
            data.push(ele)
        }
        else{
            data = [ele]
        }
        data = JSON.stringify(data)
        StorageGateway.remove(this.key);
        await StorageGateway.set(this.key,data)
    }
}
  