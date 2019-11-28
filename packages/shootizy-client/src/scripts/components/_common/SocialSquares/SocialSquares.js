import React from "react";
import { number, array, bool } from "prop-types";
import "./SocialSquares.scss";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import { sliceAndRemoveHTML } from "scripts/utils/utils";
import { formatDate } from "scripts/utils/DateUtils";
import Icon from "scripts/components/Icon";

const SocialSquares = ({ cols, nums, twitterPos, className, fill }) => {
  const { contents } = useRemoteContents(`/api/social?nums=${nums}&twitterPos=${twitterPos}`);
  const colClassName = `itemscols-${cols}`;
  const emptyArray = (fill && contents && Array.from(Array(nums - contents.length))) || [];

  return (
    <div className={`SocialSquaresWrapper ${className}`}>
      {contents && (
        <div className={`row row-wrap ${colClassName}`}>
          {contents.map(({ key, url, thumbnail, type, text, date, empty }) => (
            <a
              key={key}
              href={url}
              className={`item item-${type}`}
              style={{ backgroundImage: thumbnail ? `url("${thumbnail}")` : false }}>
              {date ? <time>{formatDate(date, "DD.MM.YYYY")}</time> : null}
              {type === "twitter" ? (
                <span className="text">{sliceAndRemoveHTML(text, 12)}</span>
              ) : null}
              <Icon name={type} />
            </a>
          ))}
          {emptyArray.map((a, index) => (
            <span className="item empty" key={index} />
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
  fill: bool,
};

SocialSquares.defaultProps = {
  cols: 2,
  nums: 4,
  twitterPos: [2],
  fill: false,
};

export default SocialSquares;
