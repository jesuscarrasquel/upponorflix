import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./listItem.scss";
import { Link } from "react-router-dom";
import { moviesCatalog } from "../../dummyData";
import { useSelector } from "react-redux";

export default function ListItem({ index, id }) {
  const [isHovered, setIsHovered] = useState(false);
  const moviesState = useSelector((state) => state.movie);
  console.log(moviesState.movie);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    let getMovie = moviesState.movie.find((item) => item.id === index);
    setMovie(getMovie);
  }, [index]);
  return (
    <Link to="/watch" state={{ movie: movie }}>
      <div
        className="listItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ left: isHovered && id * 225 - 50 + id * 2.5 }}
      >
        <img src={movie?.img} alt="" />
        {isHovered && (
          <>
            <video src={movie?.url} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hr 14 mins</span>
                <span className="limit">+{movie?.limit}</span>
                <span>{movie?.year}</span>
              </div>
              <div className="dec">{movie?.desc}</div>
              <div className="genre">{movie?.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
