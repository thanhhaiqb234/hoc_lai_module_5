import axios from "axios";
export async function getTypeService() {
  const res = await axios.get("http://localhost:8080/typeService");
  return res.data;
}
export async function findTypeServiceById(id) {
  const res = await axios.get("http://localhost:8080/typeService/" +id);
  return res.data;
}
