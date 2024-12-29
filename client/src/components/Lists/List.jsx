
import Thumbnail from "./Thumbnail";

const List = () => {
  return (
    <div className="list__container">
      <Thumbnail />
      <p>
        <span className="title__text">
          Title
        </span>
      </p>
      <p>
        <span className="content__text">
          contents
        </span>
      </p>
    </div>
  )
}

export default List;