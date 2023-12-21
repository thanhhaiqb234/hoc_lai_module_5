import axios from "axios";


export async function getListCustomer(){
    try {
        const req = await axios.get("http://localhost:8080/customers");
        return req.data;
    }catch (e){
        console.log(e);
    }
}

export async function getCustomerById(id){
    try {
        const customer = await axios.get(`http://localhost:8080/customers/${id}`);
        return customer.data;
    }catch (e){
        console.log(e);
    }
}

export async function createCustomer(customer){
    try {
        await axios.post("http://localhost:8080/customer",customer);
    }catch (e){
        console.log(e);
    }
}
export async function editCustomerById(customer){
    try {
        await axios.put(`http://localhost:8080/customers/${customer.id}`,customer);
    }catch (e){
        console.log(e);
    }
}

