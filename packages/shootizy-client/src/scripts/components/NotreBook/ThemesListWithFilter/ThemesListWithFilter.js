import React, { useContext } from "react";
import { AppContext } from "scripts/contexts/App";
import ThemesLister from "scripts/components/_common/ThemesLister";
import "./ThemesListWithFilter.scss";
import Gallery from "scripts/components/_common/Gallery";
const { fakegallery } = Gallery;

const ThemesListWithFilter = props => {
  const { state: appState } = useContext(AppContext);
  const list = appState.themes;

  return (
    list && (
      <div className="ThemesListWithFilterWrapper">
        <ThemesLister themesArray={list} />
      </div>
    )
  );
};

export default ThemesListWithFilter;
