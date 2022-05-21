import React, { useState } from 'react'

const Register = () => {
    var [name,setName]=useState("")
    var [email,setEmail]=useState("")
    var [address,setAddress]=useState("")
    var [phone,setPhone]=useState("")
    var [website,setWebsite]=useState("")
    var [company,setCompany]=useState("")
    var [uname,setUname]=useState("")
    var [password,setPassword]=useState("")
    var [cpassword,setCpassword]=useState("")

    const subData=()=>{
        const data={"name":name,"email":email,"address":address,"phone":phone,"website":website,"company":company,"username":uname,"password":password,"cpassword":cpassword}
        console.log(data)
    }
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" type="email" name="" id="" className="form-control"/> 
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <textarea onChange={(e)=>{setAddress(e.target.value)}} placeholder="Enter address" name="" id="" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Phone No</label>
                    <input onChange={(e)=>{setPhone(e.target.value)}} placeholder="Enter Phone No" type="text" className="form-control"/>

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Website</label>
                    <input onChange={(e)=>{setWebsite(e.target.value)}} placeholder="Enter Website" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Company Name</label>
                    <input onChange={(e)=>{setCompany(e.target.value)}} placeholder="Enter Company Name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Username</label>
                    <input onChange={(e)=>{setUname(e.target.value)}} placeholder="Enter Username" type="text" className="form-control"/>

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Confirm Password</label>
                    <input onChange={(e)=>{setCpassword(e.target.value)}} placeholder="Enter Confirm Password" type="password" name="" id="" className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button onClick={subData} className="btn btn-danger">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Register