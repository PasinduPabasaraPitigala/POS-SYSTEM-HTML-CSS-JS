/*
 export default function saveCustomerDB(new_Customer){

    let pre_data=localStorage.getItem(data);
    let data_arr=[];
    if (pre_data){
        data_arr=JSON.parse(pre_data);
    }
    data_arr.push(new_Customer);
    localStorage.setItem(data,JSON.stringify(data_arr));
}

export function getCustomer(){
    let pre_data=localStorage.getItem(data);
    let data_arr=[];

    //undefine-----null----""/false

    if (pre_data){
        data_arr=JSON.parse(pre_data);
    }
    return data_arr;
}*/
export function saveCustomerDB(new_customer) {
    let pre_data = localStorage.getItem(data);
    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    data_arr.push(new_customer);
    localStorage.setItem(data, JSON.stringify(data_arr));
}

export function saveItemDB(new_item) {
    let pre_data = localStorage.getItem(data);
    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }
    data_arr.push(new_item);
    localStorage.setItem(data, JSON.stringify(data_arr));
}


export function getCustomerDB(){

}

export function getItemDB(){

}