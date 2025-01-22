import axios from "axios";

export const getAllPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  // const data = res.data;
  // const {pageInfo} = res.data;
  // console.log(res.data)
  return res.data;
  }
