import React from "react";
//import PropTypes from "prop-types";
import "./BlogSmall.scss";
import titleBlog from "../../../../assets/misc/le-blog-title.svg";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";
import Icon from "../../Icon";
import { toMatrix } from "../../../utils/utils";

const data = [
  {
    id: 1,
    image: "/assets/photos/blog1.jpg",
    title: "La photo argentique fait son retour",
    description: "lorem ipsum doolors pouet amet lol",
    link: "/blog/article/1",
  },
  {
    id: 2,
    image: "/assets/photos/blog2.jpg",
    title: "L'éclairage la base de la photographie",
    description: "lorem ipsum doolors pouet amet lol",
    link: "/blog/article/2",
  },
  {
    id: 3,
    image: "/assets/photos/blog1.jpg",
    title: "La photo argentique fait son retour",
    description: "lorem ipsum doolors pouet amet lol",
    link: "/blog/article/1",
  },
  {
    id: 4,
    image: "/assets/photos/blog2.jpg",
    title: "L'éclairage la base de la photographie",
    description: "lorem ipsum doolors pouet amet lol",
    link: "/blog/article/2",
  },
];

const BlogSmall = props => {
  let dataMatrix = toMatrix(data, 2, { fill: true });
  return (
    <section className="BlogSmall">
      <div className="">
        <h2 className="BlogSmall-title">
          <img src={titleBlog} alt="Le blog" />
        </h2>
        <div className="description">
          Tendance, Mode, Look and Good Vibes autour de la photographie !
        </div>

        <div className="blog-carousel">
          <CarouselResponsive
            infiniteLoop
            showThumbs={false}
            showIndicators={true}
            showStatus={false}>
            {dataMatrix.map((row, index) => (
              <div className="slideRow container-2" key={index}>
                {row.map(({ title, image, description, link, id }) => (
                  <div className="carousel-item mea card-shadow" key={id}>
                    <img className="mea-img" src={image} alt="" />
                    <div className="mea-desc">
                      <h4>{title}</h4>
                      <p>{description}</p>
                      <a href={link}>
                        <Icon name="fleche-right" /> Lire l'article
                      </a>
                    </div>
                  </div>
                ))}{" "}
              </div>
            ))}
          </CarouselResponsive>
        </div>
        <p className="button-container-centered">
          <button className="btn-green">
            <Icon name="triangle-right" />
            &nbsp;Découvrir le blog
          </button>
        </p>
      </div>
    </section>
  );
};

BlogSmall.propTypes = {
  // bla: PropTypes.string,
};

BlogSmall.defaultProps = {
  // bla: 'test',
};

export default BlogSmall;
