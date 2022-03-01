import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    loading: false,
    movie: [
      {
        id: 1,
        title: "Deadpool",
        img: "https://elcomercio.pe/resizer/g6QbVBSAUS23CeXawjpKUpJn3-o=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MVUH5XA3MZDWFLVB7VEDHDCQSQ.jpg",
        url: "https://firebasestorage.googleapis.com/v0/b/shop-790d3.appspot.com/o/vimeoparty.mp4?alt=media&token=acce5963-ea6b-4add-9842-b9e068d392b3",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos ducimus.",
        limit: "14",
        genre: "movies",
        year: "2022",
        isSeries: "false",
      },
      {
        id: 2,
        title: "Deadpool",
        img: "https://elcomercio.pe/resizer/g6QbVBSAUS23CeXawjpKUpJn3-o=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MVUH5XA3MZDWFLVB7VEDHDCQSQ.jpg",
        url: "https://firebasestorage.googleapis.com/v0/b/shop-790d3.appspot.com/o/vimeoparty.mp4?alt=media&token=acce5963-ea6b-4add-9842-b9e068d392b3",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos ducimus.",
        limit: "14",
        genre: "movies",
        year: "2021",
        isSeries: "false",
      },
      {
        id: 3,
        title: "Deadpool",
        img: "https://elcomercio.pe/resizer/g6QbVBSAUS23CeXawjpKUpJn3-o=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MVUH5XA3MZDWFLVB7VEDHDCQSQ.jpg",
        url: "https://firebasestorage.googleapis.com/v0/b/shop-790d3.appspot.com/o/vimeoparty.mp4?alt=media&token=acce5963-ea6b-4add-9842-b9e068d392b3",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos ducimus.",
        limit: "14",
        genre: "movies",
        year: "2020",
        isSeries: "false",
      },
      {
        id: 4,
        title: "Deadpool",
        img: "https://elcomercio.pe/resizer/g6QbVBSAUS23CeXawjpKUpJn3-o=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MVUH5XA3MZDWFLVB7VEDHDCQSQ.jpg",
        url: "https://firebasestorage.googleapis.com/v0/b/shop-790d3.appspot.com/o/vimeoparty.mp4?alt=media&token=acce5963-ea6b-4add-9842-b9e068d392b3",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos ducimus.",
        limit: "14",
        genre: "series",
        year: "2022",
        isSeries: "true",
      },
      {
        id: 5,
        title: "Deadpool",
        img: "https://elcomercio.pe/resizer/g6QbVBSAUS23CeXawjpKUpJn3-o=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MVUH5XA3MZDWFLVB7VEDHDCQSQ.jpg",
        url: "https://firebasestorage.googleapis.com/v0/b/shop-790d3.appspot.com/o/vimeoparty.mp4?alt=media&token=acce5963-ea6b-4add-9842-b9e068d392b3",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos ducimus.",
        limit: "14",
        genre: "series",
        year: "2015",
        isSeries: "true",
      },
      {
        id: 6,
        title: "Deadpool",
        img: "https://elcomercio.pe/resizer/g6QbVBSAUS23CeXawjpKUpJn3-o=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MVUH5XA3MZDWFLVB7VEDHDCQSQ.jpg",
        url: "https://firebasestorage.googleapis.com/v0/b/shop-790d3.appspot.com/o/vimeoparty.mp4?alt=media&token=acce5963-ea6b-4add-9842-b9e068d392b3",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos ducimus.",
        limit: "14",
        genre: "series",
        year: "2016",
        isSeries: "true",
      },
      {
        id: 7,
        title: "Deadpool",
        img: "https://elcomercio.pe/resizer/g6QbVBSAUS23CeXawjpKUpJn3-o=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MVUH5XA3MZDWFLVB7VEDHDCQSQ.jpg",
        url: "https://firebasestorage.googleapis.com/v0/b/shop-790d3.appspot.com/o/vimeoparty.mp4?alt=media&token=acce5963-ea6b-4add-9842-b9e068d392b3",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos ducimus.",
        limit: "14",
        genre: "series",
        year: "2012",
        isSeries: "true",
      },
      {
        id: 8,
        title: "Deadpool",
        img: "https://elcomercio.pe/resizer/g6QbVBSAUS23CeXawjpKUpJn3-o=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MVUH5XA3MZDWFLVB7VEDHDCQSQ.jpg",
        url: "https://firebasestorage.googleapis.com/v0/b/shop-790d3.appspot.com/o/vimeoparty.mp4?alt=media&token=acce5963-ea6b-4add-9842-b9e068d392b3",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos ducimus.",
        limit: "14",
        genre: "series",
        year: "2011",
        isSeries: "true",
      },
      {
        id: 9,
        title: "Deadpool",
        img: "https://elcomercio.pe/resizer/g6QbVBSAUS23CeXawjpKUpJn3-o=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MVUH5XA3MZDWFLVB7VEDHDCQSQ.jpg",
        url: "https://firebasestorage.googleapis.com/v0/b/shop-790d3.appspot.com/o/vimeoparty.mp4?alt=media&token=acce5963-ea6b-4add-9842-b9e068d392b3",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos ducimus.",
        limit: "14",
        genre: "series",
        year: "2016",
        isSeries: "true",
      },
      {
        id: 10,
        title: "Deadpool",
        img: "https://elcomercio.pe/resizer/g6QbVBSAUS23CeXawjpKUpJn3-o=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MVUH5XA3MZDWFLVB7VEDHDCQSQ.jpg",
        url: "https://firebasestorage.googleapis.com/v0/b/shop-790d3.appspot.com/o/vimeoparty.mp4?alt=media&token=acce5963-ea6b-4add-9842-b9e068d392b3",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos ducimus.",
        limit: "14",
        genre: "series",
        year: "2017",
        isSeries: "true",
      },
    ],
    error: false,
  },
  reducers: {
    //GET ALL
    isLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    movieSuccess: (state, action) => {
      state.isLoading = false;
      state.movie = action.payload;
    },
    isError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    //DELETE
    deleteIsLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    deleteMovieSuccess: (state, action) => {
      state.isLoading = false;
      state.movie.splice(
        state.movie.findIndex((item) => item.id === action.payload),
        1
      );
    },
    deleteIsError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    //UPDATE
    updateIsLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    updateMovieSuccess: (state, action) => {
      state.isLoading = false;
      state.movie[
        state.movie.findIndex((item) => item.id === action.payload.id)
      ] = action.payload.movie;
    },
    updateIsError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    //ADD
    addIsLoading: (state) => {
      state.loading = true;
      state.error = false;
    },
    addMovieSuccess: (state, action) => {
      state.isLoading = false;
      state.movie.push(action.payload);
    },
    addIsError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  isLoading,
  movieSuccess,
  isError,
  deleteIsLoading,
  deleteMovieSuccess,
  deleteIsError,
  updateIsLoading,
  updateMovieSuccess,
  updateIsError,
  addIsLoading,
  addMovieSuccess,
  addIsError,
} = movieSlice.actions;
export default movieSlice.reducer;
