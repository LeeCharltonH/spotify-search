import React from "react";
import { searchActions } from "../../store/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Button from "../UI/button/button";
import Input from "../UI/input/input";
import axios from "axios";
import styles from './search.module.scss';

const Search = (props) => {
    const loginState = useSelector(state => state.loginState.token)
    const dispatch = useDispatch();
    
    const [searchKey, setSearchKey] = useState("");
    
  
    const searchArtists = async (e) => {
      e.preventDefault();
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${loginState}`,
        },
        params: {
          q: searchKey,
          type: "artist,album,playlist",
        },
      });
      dispatch(
        searchActions.updateArtists({
          artists: data.artists.items,
        })
      );
      dispatch(
        searchActions.updateAlbums({
          albums: data.albums.items,
        })
      );
      dispatch(
        searchActions.updatePlaylists({
          playlists: data.playlists.items,
        })
      );
    };

  return (
    <React.Fragment>
      {loginState ? (
        <form onSubmit={searchArtists} className={styles.form}>
          <Input
            type={"text"}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />
          <button type={"submit"}>Search</button>
        </form>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Search;
