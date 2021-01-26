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
        return StorageGateway.get(this.key)
    }

    setNewCartElement = async (ele) => {
        let data = StorageGateway.get(this.key);
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

    clearCart = async (ele) => {
        StorageGateway.remove(this.key)
    }
}
  