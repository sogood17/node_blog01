import {useState} from "react";
import PostEditor from "./PostEditor";
import {useNavigate} from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../commonComponents/Buttons/Button";
import { TitleInput } from "../commonComponents/Inputs/Input";
import "./Post.css";
import AddThumbnail from "./AddThumbnail";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [thumbnail, setThumbnail] =useState(false);

  const navigate = useNavigate();

  //title
  const titleHandler = (value) => {
    setTitle(value);
  }

  const addThumbnail = () => {
    
  }

  //when sumbmit
  const submitPost = (e) => {
    e.preventDefault();
    setDisabled(true);
  }

  //exit create post page
  const exitCreatePost = () => {
    if (window.confirm(`Do you want to quit? The draft will not be saved. Are you sure you want to exit?`)) {
      navigate(`../`);
    }
  }

  return (
    <form className="post__form--flex">
      <TitleInput type="text" name="title" id="title" value={title} onChange={(e)=>titleHandler(e.target.value)} placeholder="Title" />
      <hr className="hr--long" />
      <div className="button__container">
        <AddThumbnail />
      </div>
      <PostEditor />
      <div className="button__container">
      <PrimaryButton type="submit" onClick={(e)=>submitPost(e)} text="Create Post" size="md" disabled={disabled} />
      <SecondaryButton type="button" onClick={()=>exitCreatePost()} text="Exit" size="md" disabled={disabled} />
      </div>
    </form>
  )
}

export default CreatePost;