import React from 'react'
import FormImage from "../../Assets/profile/portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumper.png";


export default function Profile() {
  return (
    <>
    
    <div class="row bg-white my-2">
            
            <div class="col-md-4">
                <div class=" my-2">
                    <div class="container">
                        <form class="d-flex align-items-center " role="search">
                            <input class="form-control border-0 bg-light m-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn bg-light " type="submit"><i class="fa-solid text-muted fa-magnifying-glass"></i></button>
                          </form>
                    </div>
                    
                </div>
            </div>
            <div class="col-md-2 offset-6">
                <div class=" profile my-3 ">
                    <i class="px-4 fa-regular text-muted fa-bell"></i>
                    <img src={FormImage} className="rounded-circle" alt=""/>
                </div>
            </div>
        
        
        
    </div>
    
    </>
  )
}
