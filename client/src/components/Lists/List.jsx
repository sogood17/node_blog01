import Thumbnail from "../commonComponents/Thumbnail";

const List = ({title, body}) => {

  return (
    <div className="list__container">
      <li>
      <Thumbnail />
      <p>
        <span className="title__text">
          {title}
        </span>
      </p>
      <p>
        <span className="content__text">
          {body}
        </span>
      </p>
      </li>
    </div>
  )
}

export default List;