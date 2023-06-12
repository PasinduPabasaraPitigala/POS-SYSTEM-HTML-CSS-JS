export default class Item{

    constructor(ItemId,ItemName,ItemQty,ItemPrice) {
        this._ItemId=ItemId;
        this._ItemName=ItemName;
        this._ItemQty=ItemQty;
        this._ItemPrice=ItemPrice;
    }

    get ItemId(){
        return this._ItemId;
    }

    set ItemId(ItemId){
        this._ItemId = ItemId;
    }

    get ItemName(){
        return this._ItemName;
    }
    set ItemName(ItemName){
       this._ItemName = ItemName;
    }
    get ItemQty(){
        return this._ItemQty;
    }
    set ItemQty(ItemQty){
        this._ItemQty = ItemQty;
    }

    get ItemPrice(){
        return this._ItemPrice;
    }

    set ItemPrice(ItemPrice){
        this._ItemPrice = ItemPrice;
    }
}