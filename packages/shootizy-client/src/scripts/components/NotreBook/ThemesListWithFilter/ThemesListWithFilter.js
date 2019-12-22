import React, { useContext } from "react";
import { AppContext } from "scripts/contexts/App";
import ThemesLister from "scripts/components/_common/ThemesLister";
import "./ThemesListWithFilter.scss";

const ThemesListWithFilter = ({ className }) => {
  const { state: appState } = useContext(AppContext);
  const list = appState.themes;

  return (
    list && (
      <div className={`ThemesListWithFilterWrapper ${className}`}>
        <ThemesLister themesArray={list} />
      </div>
    )
  );
};

export default ThemesListWithFilter;
