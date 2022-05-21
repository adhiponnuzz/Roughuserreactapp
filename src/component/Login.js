import React, { useState } from 'react'

const Login = () => {
    var [username,setUsername]=useState("")
    var [password,setPassword]=useState("")

    const subData=()=>{
        const data={"name":username,"password":password}
        console.log(data)


    }
  return (
    <div>

<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Username</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter Username" type="text" class="form-control"/>

                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" type="password" name="" id="" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} class="btn btn-danger">LOGIN</button>
                  
                </div>
            </div>
        </div>
    </div>
</div>




    </div>
  )
}

export default Login
