import axios from "axios";


export async function getListContract(){
    try {
        const req = await axios.get("http://localhost:8080/contracts");
        return req.data;
    }catch (e){
        console.log(e);
    }
}

export async function getContractById(id){
    try {
        const contract = await axios.get(`http://localhost:8080/contracts/${id}`);
        return contract.data;
    }catch (e){
        console.log(e);
    }
}

export async function createContract(contract){
    try {
        await axios.post("http://localhost:8080/contracts",contract);
    }catch (e){
        console.log(e);
    }
}

export async function editContractById(contract){
    try {
        await axios.put(`http://localhost:8080/contracts/${contract.id}`,contract);
    }catch (e){
        console.log(e);
    }
}

export async function deleteContractById(id){
    try {
        await axios.delete(`http://localhost:8080/contracts/${id}`);
    }catch (e){
        console.log(e);
    }
}


