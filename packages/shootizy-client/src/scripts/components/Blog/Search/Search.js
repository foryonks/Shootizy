// eslint-disable-next-line
import React, { useState, useEffect, useCallback } from "react";
import "./Search.scss";
import classNames from "classnames";
import SearchIcon from "./SearchIcon";
import { fetchJson } from "scripts/utils/api";
import { withRouter } from "react-router-dom";
import CloseIcon from "scripts/components/_common/Icons/Close";
import useKeyPress from "scripts/hooks/useKeyPress";
import ListItem from "./ListItem";

import itemUrl from "./itemUrl";

const Search = ({ history, className }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [items, setItems] = useState([]);
  // eslint-disable-next-line
  const [selected, setSelected] = useState(undefined);
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  const [cursor, setCursor] = useState(0);
  const [hovered, setHovered] = useState(undefined);

  useEffect(() => {
    if (items.length && downPress) {
      setCursor(prevState => (prevState < items.length - 1 ? prevState + 1 : prevState));
    }
  }, [downPress, items]);
  useEffect(() => {
    if (items.length && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress, items]);
  useEffect(() => {
    if (items.length && enterPress) {
      history.push(itemUrl(items[cursor]));
    }
  }, [cursor, enterPress, items, history]);
  useEffect(() => {
    if (items.length && hovered) {
      setCursor(items.indexOf(hovered));
    }
  }, [hovered, items]);

  const inputRef = useCallback(node => {
    if (node !== null) {
      node.focus();
    }
  }, []);

  const onKeyPress = event => {
    if (event.keyCode === 27) {
      closeSearch();
    }
  };

  const openSearch = () => {
    setInputVisible(true);
    document.addEventListener("keydown", onKeyPress);
  };

  const closeSearch = () => {
    setInputVisible(false);
    setItems([]);
    document.removeEventListener("keydown", onKeyPress);
  };

  const onInputChange = async e => {
    const items = await fetchJson(`/api/blog/search/${e.target.value}`);
    setItems(items);
  };

  return (
    <div className={`SearchBlogWrapper ${className || ""}`}>
      <button type="button" className="btn-very-small icon-search" onClick={openSearch}>
        <SearchIcon />
      </button>
      {inputVisible && (
        <form className="search-form" action="" onSubmit={e => e.preventDefault()}>
          <div className="search-form-content">
            <button type="button" className="btn-very-small icon-search icon-nocursor">
              <SearchIcon />
            </button>
            <span
              className={classNames({
                "search-input-container": true,
              })}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Je recherche..."
                className="search-input"
                onChange={onInputChange}
              />
            </span>
            <button type="button" className="icon-close" onClick={closeSearch}>
              <CloseIcon />
            </button>
            {items && items.length ? (
              <ul className="search-result">
                {items.map((item, i) => (
                  <ListItem
                    key={item._id}
                    active={i === cursor}
                    item={item}
                    setSelected={setSelected}
                    setHovered={setHovered}
                  />
                ))}
              </ul>
            ) : null}
          </div>
        </form>
      )}
    </div>
  );
};

export default withRouter(Search);
