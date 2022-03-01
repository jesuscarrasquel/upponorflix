import { useEffect, useState, React } from "react";
import { useDispatch } from "react-redux";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import { listOfMovies, moviesCatalog } from "../../dummyData";
import { isError, isLoading, movieSuccess } from "../../redux/movieSlice";
import "./home.scss";

export default function Home({ type, genre }) {
  const [listMovies, setListMovies] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setListMovies(listOfMovies);
    // dispatch(isLoading());
    // try {
    //   dispatch(movieSuccess(moviesCatalog));
    // } catch (error) {
    //   dispatch(isError());
    // }
  }, [type, genre, dispatch]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {listMovies.map((list) => (
        <List list={list} key={list.id} />
      ))}
    </div>
  );
}
