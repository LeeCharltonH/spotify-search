import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialResults = { artists: [], albums: [], playlists: [] };

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: initialResults,
  reducers: {
    updateArtists(state, action) {
      state.artists = action.payload.artists;
    },
    updateAlbums(state, action) {
      state.albums = action.payload.albums;
    },
    updatePlaylists(state, action) {
      state.playlists = action.payload.playlists;
    },
  },
});

const initialLoginState = {
  token: window.localStorage.getItem("token"),
};

const loginSlice = createSlice({
  name: "loginState",
  initialState: initialLoginState,
  reducers: {
    login(state, action) {
      state.token = action.payload;
    },
  },
});

export const searchActions = searchResultsSlice.actions;
export const loginActions = loginSlice.actions;

const store = configureStore({
  reducer: {
    searchResults: searchResultsSlice.reducer,
    loginState: loginSlice.reducer,
  },
});

export default store;
