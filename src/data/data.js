import axios from "axios";
import { api_url } from "./api_url";

export function getProducts(setProducts) {
  axios.get(`${api_url}/getProducts`).then((res)=>{
    console.log(res.data.response);
    setProducts(res.data.response)
  }).catch((error)=>{
    alert("Something went wrong")
  })
}

/* export const getProducts = async (res) => {
  try {
    const data = await axios.get(`api_url/getProducts`);

    console.log(data)

    return data;
  } catch (error) {
    console.log("Failed to fetch", error)
  }
}; */


