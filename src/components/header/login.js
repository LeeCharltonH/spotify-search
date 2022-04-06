import React from "react";
import { useEffect } from "react";
import Button from "../UI/button/button";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/index";
import { useSelector } from "react-redux";
import styles from './login.module.scss';

const Login = (props) => {
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.loginState.token);
  const CLIENT_ID = "38ccb9c5c1924df2a1affd87e2bb7a99";
  const REDIRECT_URI = "https://spotify-search-2d1d9.web.app/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elm) => elm.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    dispatch(loginActions.login(token));
  }, []);

  const logout = () => {
    dispatch(loginActions.login(''))
    window.localStorage.removeItem("token");
  };

  return (
    <React.Fragment>
      {!loginState ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
         <Button className={styles.loginBtn}>Login to Spotify</Button> 
        </a>
      ) : (
        <Button onClick={logout} className={styles.logout}>Logout</Button>
      )}
    </React.Fragment>
  );
};

export default Login;
