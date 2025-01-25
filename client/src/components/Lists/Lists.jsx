import { useState, useEffect } from "react";
import "./Lists.css"
import List from "./List.jsx";
import {getAllPosts} from "../../api/postapis.js";

const Lists = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getAllPosts();
        setPosts(postsData);
        setLoading(false);
      } catch (err) {
        setError("Sorry. Failed to fetch posts!");
        setLoading(false);
      }
    }
    fetchPosts();
  },[])


if (loading) {
  return <h2>loading</h2>
}

  return (
    <div className="lists__frame">
      <ul className="lists__container">
      {posts.map((post)=>{
        return (
        <List key={post.id} title={post.title} content={post.content} thumbnail={post.photos[0]} />
      )})}
      </ul>
    </div>
  );
  };

export default Lists;