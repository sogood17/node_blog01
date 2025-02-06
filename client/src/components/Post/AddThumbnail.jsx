import {useState} from "react";
import { PrimaryButton, SecondaryButton } from "../commonComponents/Buttons/Button";
import { ThumbnailInput } from "../commonComponents/Inputs/Input";
import Thumbnail from "../commonComponents/Thumbnail";

const AddThumbnail = () => {
  const [thumbnailValue, setThumbnailValue]=useState("");
  const [thumbnailURL, setThumbnailURL]=useState("");
  const [isThumbnail, setIsThumbnail]= useState(false);
  const thumbnailHandler = (e) => {
    setThumbnailValue(e.target.value);
  }

  const confirmThumbnail = () => {
    console.log({thumbnailValue});
    if (thumbnailValue === "") {
      return;
    }
    if (window.confirm(`Would you like to add this URL for thumbnail?`)) {
      console.log("thumbnail added");
      setThumbnailURL(thumbnailValue);
      setIsThumbnail(true);
    }
    console.log({thumbnailURL});
    console.log({isThumbnail});
  }

  const deleteThumbnail = () => {
    if (window.confirm(`Are you sure you want to delete current thumbnail?`)) {
      console.log("thumbnail deleted");
      setThumbnailURL("");
      setIsThumbnail(false);
    }
    console.log({thumbnailURL});
    console.log({isThumbnail});
  }


  return (
    <div>
      {isThumbnail && <Thumbnail thumbnail={thumbnailURL} />}
      <ThumbnailInput type="Text" name="thumbnailValue" id="thumbnailValue" value={thumbnailValue} onChange={(e)=>{thumbnailHandler(e)}} placeholder="Please put thumnail URL" />
      <div className="button__container">
      <PrimaryButton text="Add thumbnail" onClick={()=>confirmThumbnail()} size="md" disabled={false} type="button" />
      <SecondaryButton text="delete thumbnail" onClick={()=>deleteThumbnail()} size="md" disabled={!isThumbnail} type="button" />
    </div>
    </div>
  )
}

export default AddThumbnail;