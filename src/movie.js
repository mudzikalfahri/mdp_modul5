import { Fragment } from "react";
import "./movie.css";
import CardBig from "./cardbig";
import CardSmall from "./cardsmall";

export default function Movie() {
  const STAR_COLOR = "rgb(253, 199, 76)";
  const STAR_SIZE = 20;
  const poster = [
    {
      title: "John Wick",
      id: 1,
      rate: 4,
      genre: "Action, Crime",
      img: "https://dafunda.com/wp-content/uploads/2019/05/john-wick-4.jpg",
    },

    {
      title: "Doctor Strange",
      id: 2,
      rate: 4.7,
      genre: "Action, Fiction",
      img: "https://th.bing.com/th/id/OIP.BDSSsdV5lPziEWyKXqGJMQHaK0?pid=ImgDet&rs=1",
    },

    {
      title: "Venom",
      id: 3,
      rate: 4.5,
      genre: "Fiction, Thriller",
      img: "https://www.bestmovieposters.co.uk/wp-content/uploads/2019/01/inCmCRl_.jpeg",
    },
    {
      title: "Justice League",
      id: 4,
      rate: 4.7,
      genre: "Superhero, Fiction",
      img: "https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-justiceleague.jpg",
    },
  ];

  const data = [
    {
      title: "John Wick",
      id: 1,
      rate: 4,
      genre: "Action, Crime",
      img: "https://dafunda.com/wp-content/uploads/2019/05/john-wick-4.jpg",
    },

    {
      title: "Doctor Strange",
      id: 2,
      rate: 4.7,
      genre: "Action, Fiction",
      img: "https://th.bing.com/th/id/OIP.BDSSsdV5lPziEWyKXqGJMQHaK0?pid=ImgDet&rs=1",
    },

    {
      title: "Venom",
      id: 3,
      rate: 4.5,
      genre: "Fiction, Thriller",
      img: "https://www.bestmovieposters.co.uk/wp-content/uploads/2019/01/inCmCRl_.jpeg",
    },
    {
      title: "Justice League",
      id: 4,
      rate: 4.7,
      genre: "Superhero, Fiction",
      img: "https://www.slashfilm.com/wp/wp-content/images/2017-bestposter-justiceleague.jpg",
    },
  ];

  return (
    <>
      <div className="titlecon">
        <p id="movies">Top Movies</p>
        <p className="seeall">See All</p>
      </div>
      <div className="containerTop">
        {poster.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
            />

            {data.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
          </Fragment>
        ))}
      </div>

      <div className="titlecon">
        <p id="movies">All Movies</p>
        <p className="seeall">See All</p>
      </div>
      <div className="containerbot">
        {data.map((item, index) => (
          <Fragment key={item.id}>
            <CardSmall
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
              onClick={() => alert("item id = " + item.id)}
            />

            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
          </Fragment>
        ))}
      </div>
    </>
  );
}
