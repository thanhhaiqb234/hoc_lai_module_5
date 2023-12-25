import axios from "axios";
export async function getTypeCustomer() {
  const response = await axios.get("http://localhost:8080/typeCustomer");
  return response.data;
}
export async function findTypeCustomerById(id) {
  const res = await axios.get("http://localhost:8080/typeCustomer/" + id);
  return res.data;
}
