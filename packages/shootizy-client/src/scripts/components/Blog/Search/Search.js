import React, { useState, useRef } from "react";
import "./Search.scss";
import classNames from "classnames";
import SearchIcon from "./SearchIcon";
import { fetchJson } from "scripts/utils/api";
import { Link } from "react-router-dom";
const Search = ({ className }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const inputRef = useRef(null);
  const onButtonClick = () => {
    setInputVisible(!inputVisible);
    if (inputVisible) {
      inputRef.current.focus();
    } else {
    }
  };

  const onInputChange = async e => {
    const result = await fetchJson(`/api/blog/search/${e.target.value}`);
    setSearchResult(result);
  };

  return (
    <div className={`SearchBlogWrapper ${className || ""}`}>
      <form action="">
        <span
          className={classNames({
            "search-input-container": true,
            "search-input-container--visible": inputVisible,
          })}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Je recherche..."
            className="search-input"
            onChange={onInputChange}
          />
        </span>
        <button type="button" className="btn-very-small icon-search" onClick={onButtonClick}>
          <SearchIcon />
        </button>
      </form>

      <ul
        className={classNames({
          "search-result card-shadow": true,
          "search-result-opened": inputVisible && searchResult.length > 0,
        })}>
        {searchResult.map(({ slug, title, _id }) => (
          <li key={_id}>
            <Link to={`/blog/article/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Search.propTypes = {
  // bla: PropTypes.string,
};

Search.defaultProps = {
  // bla: 'test',
};

export default Search;
