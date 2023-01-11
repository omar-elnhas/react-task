import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidbar.css"
import logo from "../../Assets/Vector 1.svg"
import logo1 from "../../Assets/Sidbar/Shape.svg"
import logo3 from "../../Assets/Sidbar/Shape_3.svg"
import logo4 from "../../Assets/Sidbar/Vector.svg"


export default function Sidbar() {
  return (
    <>
    
    <div class="container sidebar d-flex flex-column h-100  justify-content-between">
                      <div class="login">
                        <h3><img src={logo} class="p-1 rounded-2" alt=""/> <span class="active" href="#home">Motive.</span></h3>
                        <Link to="dashboard" ><i class="fa-solid text-muted fa-shapes"></i> Dashboard</Link>
                        <Link to="#contact" ><img src={logo3} alt=""/> Assets</Link>
                        <Link to="" ><img src={logo4} alt=""/> booking</Link>
                        <Link to="#seel cars"><i class="fa-solid text-muted fa-bag-shopping"></i> sell cars</Link>
                        <Link to="#buy cars"><img src={logo1} alt=""/> buy cars</Link>
                        <Link to="#Services"><i class="fa-solid text-muted fa-scissors"></i> Services</Link>
                        <Link to="#calender"><i class="fa-regular text-muted fa-calendar-days"></i> calender</Link>
                        <Link to="#messages"><i class="fa-regular text-muted fa-comments"></i> messages</Link>
                      
                      </div>
                      <div class="logout">
                        <Link to="#news"><i class="fa-solid text-muted fa-gears"></i> Settings</Link>
                        <Link to="#contact"><i class="fa-solid text-muted fa-arrow-right-from-bracket"></i> Log out</Link>
                      </div>
                      </div>
                   

                  
    
    </>

  )
}
