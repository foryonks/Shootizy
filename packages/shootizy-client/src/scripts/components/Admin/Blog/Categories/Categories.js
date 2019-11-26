import React from "react";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import "./Categories.scss";
import FormCategory from "./FormCategory/FormCategory";

const Categories = () => {
  const { contents: categories, load: reloadList } = useRemoteContents("/api/blog/categories", {
    initialState: [],
    defaultUseCache: false,
    onLoad: categories => {
      categories = categories.map(category => ({ ...category, key: category._id }));
      categories.push({ key: "new" });
      return categories;
    },
  });

  const onSubmit = () => {
    reloadList();
  };
  const onDeleteCategory = () => {
    reloadList();
  };

  return (
    <div className="CategoriesAdminWrapper">
      <ul className="container-2">
        {categories.map(category => (
          <FormCategory
            category={category}
            handleSuccess={onSubmit}
            onDelete={onDeleteCategory}
            key={category.key}
          />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
