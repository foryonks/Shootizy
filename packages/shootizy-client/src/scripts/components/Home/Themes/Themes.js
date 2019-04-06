import React from "react";
import { keyfix, toMatrix } from "../../../utils/utils";
import "./Themes.scss";
import ThemeCard from "../ThemeCard";
import useRemoteContents from "scripts/hooks/useRemoteContents";

const Themes = props => {
  const { contents } = useRemoteContents("/api/contents/themes");
  const dataGrid = keyfix(
    toMatrix((contents || {}).items || [], 3, { transform: keyfix, fill: true })
  );

  return (
    <div className="Themes container-2 grid">
      <h2 className="title">
        Choisissez le thème de votre shooting, <br />
        <strong>selon votre besoin</strong>
      </h2>

      {dataGrid.map((row, indexRow) => (
        <div className="row row-3" key={indexRow}>
          {row.map((theme, indexTheme) =>
            theme === "" ? (
              <div className="dummyCard" key={indexTheme} />
            ) : (
              <ThemeCard {...theme} key={indexTheme} />
            )
          )}
        </div>
      ))}
    </div>
  );
};

Themes.propTypes = {
  // bla: PropTypes.string,
};

Themes.defaultProps = {
  // bla: 'test',
};

export default Themes;
