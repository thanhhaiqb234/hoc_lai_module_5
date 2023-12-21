import axios from "axios";

export async function getListService() {
    try {
        const req = await axios.get("http://localhost:8080/services")
        return req.data
    } catch (e) {
        console.log(e);
    }
}

export async function getServiceById(id) {
    try {
        const req = await axios.get(`http://localhost:8080/services/${id}`);
        return req.data;
    } catch (e) {
        console.log(e);
    }
}

export async function createService(service) {
    try {
        await axios.post("http://localhost:8080/services", service);
    } catch (e) {
        console.log(e);
    }
}

export async function deleteServiceById(id) {
    try {
        await axios.delete(`http://localhost:8080/services/${id}`);
    } catch (e) {
        console.log(e);
    }
}

export async function editServiceByid(service) {
    try {
        await axios.put(`http://localhost:8080/services/${service.id}`, service);
    } catch (e) {
        console.log(e);
    }
}