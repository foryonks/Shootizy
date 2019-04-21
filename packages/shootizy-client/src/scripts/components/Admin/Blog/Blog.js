import React from "react";

const data = [
  {
    id: 1,
    image: "/assets/photos/blog1.jpg",
    title: "La photo argentique fait son retour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscin elit. Cras aliquam mollis volutpat.",
    link: "/blog/article/1",
  },
  {
    id: 2,
    image: "/assets/photos/blog2.jpg",
    title: "L'éclairage la base de la photographie",
    description: "lorem ipsum doolors pouet amet lol",
    link: "/blog/article/2",
  },
];
const Blog = () => {
  return (
    <div className="container container-2">
      <ul className="blog-list">
        {data.map(({ title, image, description, id }) => (
          <li className="blog-list__item card card-simple card-shadow" key={id}>
            <img className="mea-img" src={image} alt="blog" />
            <div className="mea-desc">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
