import Thumbnail from "../commonComponents/Thumbnail";

const List = ({title, content}) => {

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
          {content}
        </span>
      </p>
      </li>
    </div>
  )
}

export default List;