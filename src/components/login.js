import React from "react";


function Login () {
    return(
        <div>
            <form>
                <h1>LOGIN</h1>
                <h2>Sign in to your account</h2>
                <input 
                type="text"
                placeholder="Phone Number"
                value={number}
                onChange={(e => setNumber(e.target.value))}
                />

                <input 
                className=""
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e => setPassword(e.target.value))}
                />
                

            </form>


        </div>
    )
}

export default Login;