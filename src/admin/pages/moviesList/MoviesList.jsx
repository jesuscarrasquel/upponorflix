import "./moviesList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteIsError,
  deleteIsLoading,
  deleteMovieSuccess,
} from "../../../redux/movieSlice";

export default function MoviesList() {
  const moviesState = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteIsLoading());
    try {
      dispatch(deleteMovieSuccess(id));
    } catch (error) {
      dispatch(deleteIsError());
    }
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Tittle",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img src={params.row.img} alt="" className="productListImg" />
            <span>{params.row.title}</span>
          </div>
        );
      },
    },
    { field: "desc", headerName: "Description", width: 130 },
    {
      field: "limit",
      headerName: "Limit",
      width: 90,
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 160,
    },
    {
      field: "year",
      headerName: "Year",
      width: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={`/admin/${params.row.id}`}
              state={{ movieId: params.row.id }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <div className="addMovie__containerLink">
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={moviesState.movie}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
