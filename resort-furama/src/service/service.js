import axios from "axios";


export async function getListService() {
  const res = await axios.get("http://localhost:8080/services");
  return res.data;
}
export async function createService(service) {
  await axios.post("http://localhost:8080/services", service);
}
export async function findServiceById(id) {
  const res =await axios.get("http://localhost:8080/services/" + id);
  return res.data;
}
export async function removeService(id) {
  await axios.delete("http://localhost:8080/services/" + id);
}
export async function editService(id,service) {
  await axios.put(
    "http://localhost:8080/services/" + id,
    service
  );
  
}
