import React from "react";
import { number, array } from "prop-types";
import "./SocialSquares.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import { sliceAndRemoveHTML } from "scripts/utils/utils";
import { formatDate } from "scripts/utils/DateUtils";
import Icon from "scripts/components/Icon";

const SocialSquares = ({ cols, nums, twitterPos }) => {
  const { contents } = useRemoteContents(`/api/social?nums=${nums}&twitterPos=${twitterPos}`);
  const colClassName = `itemscols-${cols}`;

  return (
    <div className="SocialSquaresWrapper">
      {contents && (
        <div className={`row row-wrap ${colClassName}`}>
          {contents.map(({ key, url, thumbnail, type, text, date }) => (
            <a
              key={key}
              href={url}
              className={`item item-${type}`}
              style={{ backgroundImage: thumbnail ? `url("${thumbnail}")` : false }}>
              {date && <datetime>{formatDate(date, "DD.MM.YYYY")}</datetime>}
              {type === "twitter" && <span className="text">{sliceAndRemoveHTML(text, 12)}</span>}
              <Icon name={type} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

SocialSquares.propTypes = {
  cols: number,
  num: number,
  twitterPos: array,
};

SocialSquares.defaultProps = {
  cols: 2,
  nums: 4,
  twitterPos: [2],
};

export default SocialSquares;
