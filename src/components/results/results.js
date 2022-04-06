import React from "react";
import Filter from "./filter";
import Listings from "./listings";
import styles from "./results.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";


const Results = (props) => {
    const loginState = useSelector(state => state.loginState.token);
  const [slectedCategory, setSelectedCategory] = useState("");

  const filterHandler = (filter) => {
    setSelectedCategory(filter);
  };

  if(loginState){
  return (
    <React.Fragment>
      <main className={styles.main}>
        <Filter onFilter={filterHandler} />
        <Listings category={slectedCategory} />
      </main>
    </React.Fragment>
  );}
};

export default Results;
