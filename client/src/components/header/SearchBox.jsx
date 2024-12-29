import React, {useState} from 'react';

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");

  
const searchValueHandler= (e) => {
  setSearchValue(e.target.value);
}

const searchBoxHandler = (e) => {
  e.preventDefault();
  console.log(searchValue);
}

  return (
    <form className="search-form__form">
      <div className="search-form__container">
      <input className="search-form__input" type="text" placeholder="Enter Search Term" value={searchValue} onChange={searchValueHandler}>
      </input>
      <button  className="search-form__button" type="submit" onSubmit={searchBoxHandler}>
        🔍
      </button>
      </div>
    </form>
  )
}

export default SearchBox;