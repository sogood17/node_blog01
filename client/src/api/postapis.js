import axios from "axios";

export const getAllPosts = async () => {
  const res = await axios.get("http://localhost:5000");
  // const data = res.data;
  // const {pageInfo} = res.data;
  console.log(res.data)
  return res.data;
  }
