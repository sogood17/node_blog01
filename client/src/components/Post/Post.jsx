import axios from "axios";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const Post = () => {
  const {id} = useParams();  //extract id from URL
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchPost = async () => {
      try {
        const res = await axios.get("http://localhost:5000/"+id)
        console.log(res.data);
        setPost(res.data);
        setLoading(false);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    }
    fetchPost();
  }, [])

  if (loading) {
    return (<div>loading</div>)
  }

  return (
    <div>
      <p>
        <h1>
          {post.title}
        </h1>
      </p>
      <p>
        <h2>
          {post.content}
        </h2>
      </p>
      <section>
        <article>
        {post.content}
        </article>
      </section>
    </div>
  )
} 

export default Post;