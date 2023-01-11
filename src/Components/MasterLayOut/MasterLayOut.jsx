import React from 'react'
import { Outlet } from 'react-router-dom' 
import Sidbar from './../Sidbar/Sidbar';
import Profile from './../Profile/Profile';



export default function MasterLayOut() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-2">
        <Sidbar/>
        </div>
        <div className="col-md-10">
            <Profile></Profile>
            <Outlet></Outlet>
        </div>
    </div>
    </div>
    
    
    </>
  )
}
