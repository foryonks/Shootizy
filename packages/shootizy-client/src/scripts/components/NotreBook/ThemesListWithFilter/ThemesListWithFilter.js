import React, { useContext } from "react";
import { AppContext } from "scripts/contexts/App";
import ThemesLister from "scripts/components/_common/ThemesLister";
import "./ThemesListWithFilter.scss";

const ThemesListWithFilter = props => {
  const { state: appState } = useContext(AppContext);
  const list = appState.themes || [];
  const themesArray = list.map(({ title, gallery }) => ({ key: title, value: gallery }));
  themesArray[0].selected = true;

  return (
    <div className="ThemesListWithFilterWrapper">
      <ThemesLister themesArray={themesArray} />
    </div>
  );
};

export default ThemesListWithFilter;
