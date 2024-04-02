import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";
import personReducer from "./reducers/personReducer";
import tvReducer from "./reducers/tvReducer";

export default configureStore({
  reducer: {
    movie: movieReducer,
    person: personReducer,
    tv: tvReducer,
  },
});
