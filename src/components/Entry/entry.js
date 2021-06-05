import React from "react";
import SignIn from "./signin/signin";


function Entry () {
    return(
        <div className="bg-warning">
            <div className="text-center">
                <p>
                    Welcome to Watch Collector! Sign In and Pick up your piece! 
                    <a href=""> Sign Up here. </a>
                </p>
            <SignIn />
            </div>
        </div>
    )
}

export default Entry;