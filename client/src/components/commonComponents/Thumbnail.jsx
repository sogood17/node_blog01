import "./Thumbnail.css";

const Thumbnail = ({thumbnail}) => {
  return (
    <div className="thumbnail__container">
      <img src={thumbnail} className="thumbnail__image" alt="img" />
    </div>
  )
}

export default Thumbnail;