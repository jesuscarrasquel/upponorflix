import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option value="genre">Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/10346451/pexels-photo-10346451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"
          alt=""
        />
        <span className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quo
          laudantium laboriosam cupiditate beatae non molestiae ipsam. Tempora
          laudantium consectetur optio eveniet vitae, itaque dolor voluptates
          cum, non quia culpa?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
