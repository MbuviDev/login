import React, { useState } from "react";


function Login () {
const [number, setNumber] = useState ("")
const [password, setPassword] = useState ("")
    
    return(
        <div class="text-gray-800 text-center antialiased">
            
                <h1 class="text-2xl font-light">LOGIN</h1> <br />
                <h2 class="text-center">Sign in to your account</h2>
                <form class="mt-4 bg-white shadow-md rounded-lg">
                <div class="h-2 bg-indigo-400 rounded-t-md"></div>
                <div class="px-8 py-6"></div>
                <label class="block font-semibold">Username</label>
                <input 
                class="border  h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                type="text"
                placeholder="Name"
                value={number}
                onChange={(e => setNumber(e.target.value))}
                /> <br />

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