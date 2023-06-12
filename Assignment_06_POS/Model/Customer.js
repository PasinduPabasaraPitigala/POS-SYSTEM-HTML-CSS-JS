export default class Customer{

    constructor(CustomerId,CustomerName,CustomerAddress,CustomerTelNumber) {

        this._CustomerId=CustomerId;
        this._CustomerName=CustomerName;
        this._CustomerAddress=CustomerAddress;
        this._CustomerTelNumber=CustomerTelNumber;

    }

    get CustomerId(){
        return this._CustomerId;
    }
    set CustomerId(CustomerId){
        this._CustomerId=CustomerId;
    }
    get CustomerName(){
        return this._CustomerName;
    }
    set CustomerName(CustomerName){
        this._CustomerName=CustomerName;
    }
    get CustomerAddress(){
        return this._CustomerAddress;
    }
    set CustomerAdress(CustomerAddress){
        this._CustomerAdress=CustomerAddress;
    }
    get CustomerTelNumber(){
        return this._CustomerTelNumber;
    }
    set CustomerTelNumber(CustomerTelNumber){
        this._CustomerTelNumber=CustomerTelNumber;
    }

}