import Customer from "../Model/Customer.js";

/*
const data = "DATA"; //local storage save key

var customer_arr = []; //

export class Customer_controller{
    constructor() {
        $('#p3btn4').click(this.handledSaveCustomer.bind(this))
        $('#p3btn6').click(this.handledUpdateCustomer.bind(this))
        $('#p3btn5').click(this.handledDeleteCustomer.bind(this))
        this.handleLoadCustomer()
        this.handleSaveCustomerValidation()
    }

    handleSaveCustomerValidation(){
        var CustomerId= $('#p3TB2').val();
        var CustomerName = $('#p3TB3').val();
        var CustomerAddress = $('#p3TB4').val();
        var CustomerTelNumber = $('#p3TB5').val();
        const regexNumber = /^\d+$/;
        if (!regexNumber.test(CustomerId)){
            alert('Invalid Id');
        }else if (!CustomerName){
            alert('Invalid Name');
        }else if (!CustomerAddress){
            alert('Invalid Address');
        }else if (!CustomerTelNumber){
            alert('Invalid TelNumber');
        }else {
            this.handledSaveCustomer();
        }
    }

    handledSaveCustomer(){
        console.log("hi..........")
        var CustomerId= $('#p3TB2').val();
        var CustomerName = $('#p3TB3').val();
        var CustomerAddress = $('#p3TB4').val();
        var CustomerTelNumber = $('#p3TB5').val();

        // validation
        const regexNumber = /^\d+$/;
        if(!regexNumber.test(CustomerId)){
            alert('Incorrect ID')
        }

        let pre_data = localStorage.getItem(data);
        let data_arr = [];

        // undefine/ null/ "" / false
        if (pre_data) {
            data_arr = JSON.parse(pre_data);
        }

        let new_customer = new Customer(CustomerId,CustomerName,CustomerAddress,CustomerTelNumber);
        console.log(new_customer)

        data_arr.push(new_customer);
        console.log(data_arr);
        localStorage.setItem(data, JSON.stringify(data_arr));

        this.handleLoadCustomer()
    }

    handleLoadCustomer(){
        let pre_data = localStorage.getItem(data);
        console.log(pre_data);
        let customer_data_arr = JSON.parse(pre_data);
        console.log(customer_data_arr);

        $('table tbody tr').remove();

        customer_data_arr.map((result, index) => {
            var row = "<tr>" +
                "<td>" + result._CustomerId + "</td>" +
                "<td>" + result._CustomerName + "</td>" +
                "<td>" + result._CustomerAddress + "</td>" +
                "<td>" + result._CustomerTelNumber + "</td>" +
                "</tr>";
            $('tbody').append(row);
        });

    }


    handledUpdateCustomer(){
        console.log("Handle Update Customer!");

        // $('#B10').on('click',(event)=>{
        //     let CustomerId = $("#textField1").val();
        //     let pre_data = localStorage.getItem(data);
        //     let customer_data_arr =JSON.parse(pre_data);
        //
        //     let index = customer_data_arr.findIndex(value => value.customer_id===customer_id);
        //     if (index > -1){
        //         console.log(customer_data_arr[index]);
        //         customer_data_arr[index].id = $("#textField1").val();
        //         customer_data_arr[index].customer_name = $("#textField2").val();
        //         customer_data_arr[index].customer_Email = $("#textField3").val();
        //         customer_data_arr[index].customer_address = $("#textField4").val();
        //         localStorage.setItem(data,JSON.stringify(customer_data_arr));
        //         loadData();
        //
        //     }
        // });

    }

    handledDeleteCustomer(){
        console.log("Handle Delete Customer!");

        $('#p3btn5').on("click",(event)=>{

            let id = $("#p3text7").val();

            let per_arr = localStorage.getItem(data);
            let arr = [];
            if(per_arr){
                arr = JSON.parse(per_arr);
            }

            let index = arr.findIndex(value => value.customer_id === id);
            console.log(index);
            arr.splice(index, 1);

            localStorage.setItem(data, JSON.stringify(arr));
            loadData();
        })

    }
}

new Customer_controller()
*/

/*//////////////////////////////////////////////////////////////////////////////*/



$("#Table1").on('click','tr',function(event){
    console.log($(event.target).text());
    let CustomerId = $(this).children().eq(0).text();
    let CustomerName = $(this).children().eq(1).text();
    let CustomerAddress = $(this).children().eq(2).text();
    let CustomerTelNumber = $(this).children().eq(3).text();

    $("#p3TB2").val(CustomerId);
    $("#p3TB3").val(CustomerName);
    $("#p3TB4").val(CustomerAddress);
    $("#p3TB5").val(CustomerTelNumber);

});

//send data local Storage
const data = "CustomerData";

var customer_arr = [];

function loadData() {
    let pre_data = localStorage.getItem(data);
    console.log(pre_data);
    let customer_data_arr = JSON.parse(pre_data);
    console.log(customer_data_arr);

    $('#Table1 tr').remove();

    customer_data_arr.map((result, index) => {
        var row = "<tr>" +
            "<td>" + result._CustomerId + "</td>" +
            "<td>" + result._CustomerName + "</td>" +
            "<td>" + result._CustomerAddress + "</td>" +
            "<td>" + result._CustomerTelNumber + "</td>" +
            "</tr>";
        $('#Table1').append(row);
    })
}
//add customer
$('#p3btn4').click(function () {
    // var customer_id = document.getElementById("customer_id").value;
    // var customer_first_name = document.getElementById("first_name").value;
    // var customer_last_name = document.getElementById("last_name").value;
    // var customer_address = document.getElementById("customer_address").value;

    var CustomerId = $('#p3TB2').val();
    var CustomerName = $('#p3TB3').val();
    var CustomerAddress = $('#p3TB4').val();
    var CustomerTelNumber = $('#p3TB5').val();



    let pre_data = localStorage.getItem(data);
    console.log("ARR: ", pre_data);

    let data_arr = [];

    // undefine/ null/ "" / false
    if (pre_data) {
        data_arr = JSON.parse(pre_data);
    }

    let obj = new Customer(CustomerId,CustomerName,CustomerAddress,CustomerTelNumber);

    /*var obj = {
        CustomerId: CustomerId,
        CustomerName: CustomerName,
        CustomerAddress: CustomerAddress,
        CustomerTelNumber: CustomerTelNumber
    }*/

    data_arr.push(obj);
    console.log(data_arr);
    localStorage.setItem(data, JSON.stringify(data_arr));
    loadData();

});

loadData();


//update customer
$('#p3btn6').on('click',(event)=>{
    let CustomerId = $("#p3TB2").val();
    let pre_data = localStorage.getItem(data);
    let customer_data_arr =JSON.parse(pre_data);

    console.log(customer_data_arr)
    let index = customer_data_arr.findIndex((value) => value._CustomerId===CustomerId);
    console.log(index);
    if (index > -1){
        console.log(customer_data_arr[index]);
        customer_data_arr[index]._CustomerId = $("#p3TB2").val();
        customer_data_arr[index]._CustomerName = $("#p3TB3").val();
        customer_data_arr[index]._CustomerAddress = $("#p3TB4").val();
        customer_data_arr[index]._CustomerTelNumber = $("#p3TB5").val();
        localStorage.setItem(data,JSON.stringify(customer_data_arr));
        loadData();

    }
});
//delete Customer
$('#p3btn5').on("click",(event)=>{

    let id = $("#p3TB2").val();

    let per_arr = localStorage.getItem(data);
    let arr = [];
    if(per_arr){
        arr = JSON.parse(per_arr);
    }

    let index = arr.findIndex(value => value._CustomerId === id);
    console.log(index);
    arr.splice(index, 1);

    localStorage.setItem(data, JSON.stringify(arr));
    loadData();
})