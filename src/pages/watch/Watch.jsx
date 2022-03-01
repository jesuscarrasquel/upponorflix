import "./watch.scss";
import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
export default function Watch() {
  const { state: movie } = useLocation();
  return (
    <div className="watch">
      <Link to="/" className="link">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video src={movie.movie.url} autoPlay progress controls />
    </div>
  );
}
