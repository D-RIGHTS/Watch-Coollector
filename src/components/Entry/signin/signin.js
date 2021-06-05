import React from "react";

const SignIn = () => {
    return(
        <div className="container">
            <form className="">
                <input 
                type="text" 
                placeholder="Enter Email Here..." 
                />
                <br />
                <br />
                <input 
                type="password"
                placeholder="Enter Password"
                />
                <br />
                <br />
                <button className="btn btn-info">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;
