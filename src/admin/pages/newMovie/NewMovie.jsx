import "./newMovie.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  addIsError,
  addIsLoading,
  addMovieSuccess,
} from "../../../redux/movieSlice";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";
import Spinner from "../../components/spinner/Spinner";

export default function NewMovie() {
  const dispatch = useDispatch();
  const moviesState = useSelector((state) => state.movie);
  const [movieAdded, setMovieAdded] = useState(false);
  const [uploaded, setUploaded] = useState(0);
  const [uploadMessage, setUploadMessage] = useState(false);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const arr = [];
  moviesState.movie.map((item) => {
    const { id, ...rest } = item;
    arr.push(id);
  });
  let maxNumber = Math.max(...arr);

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
            console.log(downloadURL);
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
    const img = files.img;
    const video = files.video;
    dispatch(addIsLoading());
    try {
      dispatch(
        addMovieSuccess({
          id: maxNumber + 1,
          title,
          desc,
          limit,
          genre,
          year,
          img,
          video,
        })
      );
      setMovieAdded(true);
      setUploadMessage(false);
    } catch (error) {
      dispatch(addIsError());
    }
  };

  useEffect(() => {
    console.log("first", uploaded);
    if (uploaded >= 2) {
      setLoading(false);
      setUploadMessage(true);
    }
  }, [uploaded]);

  return (
    <div className="newProduct">
      {loading && (
        <>
          <Spinner />
        </>
      )}
      <h1 className="addProductTitle">New Movie</h1>

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
                onChange={(e) => setFieldValue("img", e.currentTarget.files[0])}
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
                  Create
                </button>
              </>
            )}
            {movieAdded && (
              <span className="success">The movie has been added.</span>
            )}
            {uploadMessage && (
              <span className="success">
                Your files have been uploaded, proceed to create the movie.
              </span>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
