import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getPostDetail } from "../../api/postapis";
import "./Post.css";

const Post = () => {
  const {id} = useParams();  //extract id from URL
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchPost = async () => {
      try {
        const postData = await getPostDetail(id);
        console.log(postData);
        setPost(postData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPost();
  }, [id])

  if (loading) {
    return (<div>loading</div>)
  }

  return (
    <div className="post__frame">
    <div className="post__container">
      <p>
        <h1 className="post__title__bold">
          {post.title}
        </h1>
      </p>
      <p>
        <h2 className="post__title__lighter">
          {post.content}
        </h2>
      </p>
      {post?.photos.length > 0 &&
      <img className="post__image" src={post?.photos[0]} />}
      <section className="post__section">
        <article className="post__article__basic">
        {post.content}
        </article>
      </section>
    </div>
    </div>
  )
} 

export default Post;