
import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types'
import jwt from "jsonwebtoken";
import axios, {setToken} from "../utilities/axios";
import FormSignIn from "./FormSignIn";

function GoogleSignIn ({isAuthenticated, setLoggedIn, setStage, stage, visibility}) {
    const myRef = React.createRef();
    async function profileExists (googleUser) {
        if (stage==="button")
            return {
                res:await axios.get("connect/profile/"),
                googleUser: googleUser
            }
    }

    const [initializing, setInitializing] = useState(true);

    useEffect(() => {

        if (window.google && !isAuthenticated && initializing) {
            window.google.accounts.id.initialize({
                auto_select: false,
                client_id: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID,
                callback: onSignIn,
                context: "signin",
                ux_mode: "popup",
            })
            window.google.accounts.id.prompt()
            window.google.accounts.id.renderButton(myRef.current, {
                text: "continue with Skype",
                theme: 'filled_black',
                shape: "pill",
                size: 'large',

            })
            setInitializing(false)
        }
    })


    const [googleUserState, setGoogleUserState] = useState(undefined);


    async function onSignIn(googleUser) {
        if (stage === "button") {
            // if (jwt.decode(googleUser.credential).hd !== "iiitd.ac.in") {
            //     alert("Please login using your IIITD ID")
            //     window.google.accounts.id.revoke(jwt.decode(googleUser.credential).email, () => {
            //         localStorage.clear();
            //         window.location.href = "/";
            //     })
            // }

            let res_temp = await axios.post("authenticate/oauthcallback/", {
                "jwt": googleUser.credential
            })
            setToken(res_temp.data['access_token'])

            if (!googleUserState)
                setGoogleUserState(jwt.decode(googleUser.credential));
            // setStage("form")


            // setLoggedIn()
            // await router.push("/")

        }
        if (!googleUserState)
            setGoogleUserState(jwt.decode(googleUser.credential));

        profileExists(googleUser).then((response) => {
            if (!response.res.data.length) {
                if (!googleUserState)
                    setGoogleUserState(jwt.decode(googleUser.credential));
                setStage("form");
            } else {
                setLoggedIn()
            }
        })
    }


    // let loggedIn=false;
    if (typeof window !== "undefined") {
        window.onSignIn = (googleUser) => {
            onSignIn(googleUser);
        };
        // loggedIn = Boolean(localStorage.getItem("encrypted_token"));
    }
    if (visibility) {

        if (stage==="button")
            return (
                <div
                    ref={myRef}
                />
                );
        else if (stage==="form") {
            const nameSplitter = googleUserState.name.lastIndexOf(" ");
            return (
                <FormSignIn
                    emailId={googleUserState.email}
                    firstName={googleUserState.name.substring(0, nameSplitter)}
                    lastName={googleUserState.name.substring(nameSplitter + 1)}
                    onSubmit={setLoggedIn}
                />
            )
        }

    }
    return null;

}

GoogleSignIn.propTypes={
    isAuthenticated: PropTypes.bool.isRequired,
    setLoggedIn: PropTypes.func.isRequired,
    setStage: PropTypes.func.isRequired,
    stage: PropTypes.string.isRequired,
    visibility: PropTypes.bool.isRequired,
}
export default GoogleSignIn;
