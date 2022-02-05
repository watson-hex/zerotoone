import "../styles/globals.css";
import {useState} from "react";
import Mainlayout from "../common/Mainlayout";
import {authSetLoggedIn, authSetLoggedOut, isBrowser} from "../utilities/auth";
import {Metrics} from '@layer0/rum'

export default function MyApp({ Component, pageProps }) {
  new Metrics({
    token: process.env.NEXT_PUBLIC_LAYER0_RUM_TOKEN
  }).collect()

  const [loggedIn, _setLoggedIn] = useState((isBrowser() && sessionStorage.getItem("loginFlag")));
  const setLoggedIn = () => {
    authSetLoggedIn();
    _setLoggedIn(true);
  }

  const setLoggedOut = () => {
    authSetLoggedOut();
    _setLoggedIn(false);
  }

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (<Mainlayout isAuthenticated={loggedIn}
                      setLoggedIn={setLoggedIn}
                      setLoggedOut={setLoggedOut}><Component
                                {...pageProps} /> </Mainlayout>);
}
