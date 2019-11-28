import React from "react";
import { Link } from "react-router-dom";
import itemUrl from "./itemUrl";
const ListItem = ({ item, active, setSelected, setHovered }) => (
  <li>
    <Link
      to={itemUrl(item)}
      onClick={() => setSelected(item)}
      onMouseEnter={() => setHovered(item)}
      onMouseLeave={() => setHovered(undefined)}
      className={active ? "hover" : ""}>
      {item.title}
    </Link>
  </li>
);

export default ListItem;
