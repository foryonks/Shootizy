import React from "react";
import PropTypes, { string } from "prop-types";
import "./RatingStarIcon.scss";

const RatingStarIcon = ({ className, fill }) => {
  className = (className || "") + (fill >= 100 ? " RatingStarIcon--active" : "");
  return (
    <span className={`RatingStarIcon ${className}`}>
      <svg viewBox="0 0 25.94 28">
        <path
          d="m1377.31 7882.05 2.68 6.14a1.763 1.763 0 0 0 1.29 1.06l6 .98a2 2 0 0 1 .94 3.29l-4.33 4.78a2.084 2.084 0 0 0 -.5 1.71l1.03 6.74a1.766 1.766 0 0 1 -2.48 2.04l-5.36-3.19a1.58 1.58 0 0 0 -1.6 0l-5.36 3.19a1.766 1.766 0 0 1 -2.48-2.04l1.02-6.74a2.078 2.078 0 0 0 -.49-1.71l-4.34-4.78a2.006 2.006 0 0 1 .95-3.29l6-.98a1.766 1.766 0 0 0 1.28-1.06l2.68-6.14a1.635 1.635 0 0 1 3.07 0z"
          transform="translate(-1362.81 -7881)"
        />
      </svg>
      {fill > 0 && fill < 100 ? (
        <span className="fill" style={{ width: `${fill}%` }}>
          <svg viewBox="0 0 25.94 28">
            <path
              d="m1377.31 7882.05 2.68 6.14a1.763 1.763 0 0 0 1.29 1.06l6 .98a2 2 0 0 1 .94 3.29l-4.33 4.78a2.084 2.084 0 0 0 -.5 1.71l1.03 6.74a1.766 1.766 0 0 1 -2.48 2.04l-5.36-3.19a1.58 1.58 0 0 0 -1.6 0l-5.36 3.19a1.766 1.766 0 0 1 -2.48-2.04l1.02-6.74a2.078 2.078 0 0 0 -.49-1.71l-4.34-4.78a2.006 2.006 0 0 1 .95-3.29l6-.98a1.766 1.766 0 0 0 1.28-1.06l2.68-6.14a1.635 1.635 0 0 1 3.07 0z"
              transform="translate(-1362.81 -7881)"
            />
          </svg>
        </span>
      ) : null}
    </span>
  );
};

RatingStarIcon.propTypes = {
  className: string,
  fill: PropTypes.number,
};

RatingStarIcon.defaultProps = {
  // bla: 'test',
};

//let gradientsDefined = false;

// function defineGradients() {
//   if (gradientsDefined) return;

//   let div = document.createElement("div");
//   div.setAttribute("aria-hidden", "true");
//   div.setAttribute("style", "width:0;height:0;position:absolute");
//   div.setAttribute("focusable", "false");
//   div.innerHTML = [...Array(11)]
//     .map((item, index) => {
//       const i = index * 10;
//       return `
// <svg style="width:0;height:0;position:absolute" aria-hidden="true" focusable="false">
//   <linearGradient id="svgGradient-${i}" class="star-gradient">
//     <stop stop-opacity="1" offset="0" stop-color="var(--stop-color)></stop>
//     <stop stop-opacity="0" offset="${i}%"></stop>
//   </linearGradient>
// </svg>`;
//     })
//     .join("");
//   document.body.appendChild(div);
//   console.log(div);
//   gradientsDefined = true;
// }

export default RatingStarIcon;
