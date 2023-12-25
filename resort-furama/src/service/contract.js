import axios from "axios";

export async function getListContracts() {
  const res = await axios.get("http://localhost:8080/contracts");
  return res.data;
}
export async function addNewContract(contract) {
  await axios.post("http://localhost:8080/contracts", contract);
}
export async function findContractById(id){
 const res= await axios.get("http://localhost:8080/contracts/"+id);
 return res.data;
}
