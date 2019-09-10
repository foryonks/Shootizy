import React from "react";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";
import "./BlogSmall.scss";
import titleBlog from "assets/misc/le-blog-title.svg";
import Icon from "../../Icon";
import { toMatrix } from "../../../utils/utils";
import useRemoteContents from "scripts/hooks/useRemoteContents";
import ArticleCard from "../ArticleCard";

// const data = [
//   {
//     id: 1,
//     image: "/assets/photos/blog1.jpg",
//     title: "La photo argentique fait son retour",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscin elit. Cras aliquam mollis volutpat.",
//     link: "/blog/article/1",
//   },
//   {
//     id: 2,
//     image: "/assets/photos/blog2.jpg",
//     title: "L'éclairage la base de la photographie",
//     description: "lorem ipsum doolors pouet amet lol",
//     link: "/blog/article/2",
//   },
//   {
//     id: 3,
//     image: "/assets/photos/blog1.jpg",
//     title: "La photo argentique fait son retour",
//     description: "lorem ipsum doolors pouet amet lol",
//     link: "/blog/article/1",
//   },
//   {
//     id: 4,
//     image: "/assets/photos/blog2.jpg",
//     title: "L'éclairage la base de la photographie",
//     description: "lorem ipsum doolors pouet amet lol",
//     link: "/blog/article/2",
//   },
//   {
//     id: 5,
//     image: "/assets/photos/blog1.jpg",
//     title: "La photo argentique fait son retour",
//     description: "lorem ipsum doolors pouet amet lol",
//     link: "/blog/article/1",
//   },
//   {
//     id: 6,
//     image: "/assets/photos/blog2.jpg",
//     title: "L'éclairage la base de la photographie",
//     description: "lorem ipsum doolors pouet amet lol",
//     link: "/blog/article/2",
//   },
// ];

const BlogSmall = props => {
  let { contents: articles } = useRemoteContents("/api/blog/articles", { initialiState: [] });
  if (!articles) return null;

  let dataMatrix = toMatrix(articles, 2, { fill: true });

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
                {row.map(article => (
                  <ArticleCard
                    className="carousel-item"
                    key={article.articleId}
                    article={article}
                    mode="card"
                  />

                  // <div className="carousel-item mea card-shadow" key={id}>
                  //   <img className="mea-img" src={image} alt="" />
                  //   <div className="mea-desc">
                  //     <h4>{title}</h4>
                  //     <p>{description}</p>
                  //     <a href={link} className="link">
                  //       <Icon name="arrow-right" className="circle-icon" /> Lire l'article
                  //     </a>
                  //   </div>
                  // </div>
                ))}{" "}
              </div>
            ))}
          </CarouselResponsive>
        </div>
        <p className="button-container-centered">
          <button className="btn-green btn-small">
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
