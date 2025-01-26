import { Link } from "react-router-dom";
import Thumbnail from "../commonComponents/Thumbnail";

const List = ({id, title, content, thumbnail}) => {
  return (
    <div className="list__container">
      <li>
      <Link to={"/"+id}>
      <Thumbnail thumbnail={thumbnail} />
      <p>
        <span className="title__text">
          {title}
        </span>
      </p>
      <p>
        <span className="content__text">
          {content}
        </span>
      </p>
      </Link>
      </li>
    </div>
  )
}

export default List;