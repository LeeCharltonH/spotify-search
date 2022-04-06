import styles from "./filter.module.scss";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Filter = (props) => {
  const loginState = useSelector((state) => state.loginState.token);
  const [filter, setFilter] = useState("Artists");

  const filterHandler = (e) => {
    setFilter(e.target.innerHTML);
  };

  useEffect(() => props.onFilter(filter), [filter]);

  return (
    <React.Fragment>
      {loginState ? (
        <div className={styles.filterContainer}>
          <div
            className={filter === "Artists" ? styles.active : ""}
            onClick={filterHandler}
          >
            Artists
          </div>
          <div
            className={filter === "Albums" ? styles.active : ""}
            onClick={filterHandler}
          >
            Albums
          </div>
          <div
            className={filter === "Playlists" ? styles.active : ""}
            onClick={filterHandler}
          >
            Playlists
          </div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Filter;
