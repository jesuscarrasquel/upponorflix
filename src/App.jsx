import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesList from "./admin/pages/moviesList/MoviesList";
import UpdateMovie from "./admin/pages/updateMovie/UpdateMovie";
import NewMovie from "./admin/pages/newMovie/NewMovie";
import Layout from "./admin/components/layout/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/watch" element={<Watch />} />

        <Route
          exact
          path="/admin"
          element={
            <Layout>
              <MoviesList />
            </Layout>
          }
        />

        <Route
          path="/admin/:productId"
          element={
            <Layout>
              <UpdateMovie />
            </Layout>
          }
        />
        <Route
          path="/newproduct"
          element={
            <Layout>
              <NewMovie />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
