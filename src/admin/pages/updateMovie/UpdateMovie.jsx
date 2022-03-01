import "./updateMovie.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateIsError,
  updateIsLoading,
  updateMovieSuccess,
} from "../../../redux/movieSlice";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";
import Spinner from "../../components/spinner/Spinner";

export default function UpdateMovie() {
  const dispatch = useDispatch();
  const [movieUpdated, setMovieUpdated] = useState(false);
  const [uploaded, setUploaded] = useState(0);
  const [uploadMessage, setUploadMessage] = useState(false);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    state: { movieId },
  } = useLocation();

  const upload = (items) => {
    const storage = getStorage(app);
    items.forEach((item) => {
      let storageRef = ref(storage, `/media/${item.file.name}`);
      let uploadTask = uploadBytesResumable(storageRef, item.file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // const product = { ...inputs, img: downloadURL, cat };
            // addProducts(dispatch, product);
            // console.log(downloadURL);
            setFiles((prev) => {
              return { ...prev, [item.label]: downloadURL };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };
  const handleUpload = ({ video, img }) => {
    setLoading(true);
    upload([
      { file: img, label: "img" },
      { file: video, label: "video" },
    ]);
  };
  const handleClick = ({ title, desc, limit, genre, year }) => {
    dispatch(updateIsLoading());
    const img = files.img;
    const video = files.video;
    try {
      dispatch(
        updateMovieSuccess({
          id: movieId,
          movie: {
            id: movieId,
            title,
            desc,
            limit,
            genre,
            year,
            img,
            video,
          },
        })
      );
      setMovieUpdated(true);
      setUploadMessage(false);
    } catch (error) {
      dispatch(updateIsError());
    }
  };

  useEffect(() => {
    if (uploaded >= 2) {
      setLoading(false);
      setUploadMessage(true);
    }
  }, [uploaded]);
  return (
    <div className="product">
      {loading && (
        <>
          <Spinner />
        </>
      )}
      <div className="newProduct">
        <h1 className="addProductTitle">Update Movie</h1>
        <Formik
          className="addProductForm"
          initialValues={{
            title: "",
            desc: "",
            limit: "",
            genre: "",
            year: "",
            img: "",
            video: "",
          }}
          onSubmit={(values, { resetForm }) => {
            handleClick(values);
            resetForm();
          }}
        >
          {({ errors, isSubmitting, values, setFieldValue }) => (
            <Form>
              <div className="addProductItem">
                <label htmlFor="">Tittle</label>
                <Field type="text" name="title" />
              </div>
              <div className="addProductItem">
                <label htmlFor="">Desc</label>
                <Field type="text" name="desc" />
              </div>
              <div className="addProductItem">
                <label htmlFor="">Limit Age</label>
                <Field type="text" name="limit" />
              </div>
              <div className="addProductItem">
                <label htmlFor="">Genre</label>
                <Field type="text" name="genre" />
              </div>
              <div className="addProductItem">
                <label htmlFor="">Year</label>
                <Field type="text" name="year" />
              </div>
              <div className="addProductItem">
                <label htmlFor="">Thumbnail img</label>
                <input
                  type="file"
                  name="img"
                  onChange={(e) =>
                    setFieldValue("img", e.currentTarget.files[0])
                  }
                />
              </div>
              <div className="addProductItem">
                <label htmlFor="">Video File</label>
                <input
                  type="file"
                  name="video"
                  onChange={(e) =>
                    setFieldValue("video", e.currentTarget.files[0])
                  }
                />
              </div>
              {uploaded < 2 ? (
                <button
                  className="addProductButton"
                  type="button"
                  onClick={() => handleUpload(values)}
                >
                  Upload
                </button>
              ) : (
                <>
                  <button
                    className="addProductButton"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Update
                  </button>
                </>
              )}
              {movieUpdated && (
                <span className="success">The movie has been updated.</span>
              )}
              {uploadMessage && (
                <span className="success">
                  Your files have been uploaded, proceed to update the movie.
                </span>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
