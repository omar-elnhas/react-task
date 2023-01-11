import React from 'react'
import porsh from "../../Assets/BookingImg/2014-mercedes-benz-m-class-2012-mercedes-benz-m-class-2008-mercedes-benz-m-class-sport-utility-vehicle-mercedes-car-png-image-8230b0372dd015bcf5312eb17e2751ee.png"
import mercides from "../../Assets/BookingImg/car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb.png"
import toyouta from "../../Assets/BookingImg/maruti-suzuki-dzire-car-suzuki-ertiga-swift-dzire-f8a7d4ae19bd1c349dc080d9081ffd31.png"
import car from "../../Assets/BookingImg/suzuki-ertiga-maruti-car-suzuki-ciaz-suzuki-dcac04d3f676c91c7ca6f2d195b86ff3.png"
import car1 from "../../Assets/BookingImg/toyota-innova-toyota-avanza-car-rush-toyota-seven-cars-a3650fca54041ac1aaae4fe013ac79ca 1.png"
import car2 from "../../Assets/BookingImg/white car.png"
import car3 from "../../Assets/BookingImg/white car (1).png"
import car4 from "../../Assets/BookingImg/2014-mercedes-benz-m-class-2012-mercedes-benz-m-class-2008-mercedes-benz-m-class-sport-utility-vehicle-mercedes-car-png-image-8230b0372dd015bcf5312eb17e2751ee (1).png"
import car5 from "../../Assets/BookingImg/suzuki-ertiga-maruti-car-suzuki-ciaz-suzuki-dcac04d3f676c91c7ca6f2d195b86ff3.png"
import car6 from "../../Assets/BookingImg/toyota-innova-toyota-avanza-car-rush-toyota-seven-cars-a3650fca54041ac1aaae4fe013ac79ca 1.png"
import "./Booking.css"
import filter from "../../Assets/BookingImg/filter.png"
import icon from "../../Assets/BookingImg/icon.png"

export default function Booking() {
  return (
    <>
    
    <div class="container Booking bg-light rounded-4">
                <h2 class="p-4">Booking</h2>
            <div class="dropdown m-3">
                <div class="row">
                  <div class="col-md-5">
                    <div class="buttons">
                        <button class="btn m-2 btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            New
                          </button>
                          <button class="btn m-2 btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Toyouta
                          </button>
                    </div>
                  </div>
                  
                  
                    
                    <div class="col-md-2 offset-5">
                        <div class="filters">
                            <img src={icon} alt=""/>
                            <img src={filter} alt=""/>
                        </div>
                    </div>
                </div>
               
                
                
              </div>
        
              <div class="row gy-3">
                <div class="col-md-4">
                  <div class="container">
                    <div class="card rounded-4 " >
                        <div class="info  d-flex justify-content-between align-items-center">
                            <h5 class="m-2">Porshe 718 cayman S</h5>
                            <i class="mx-2 fa-regular fa-heart"></i>
        
                        </div>
                        <p class="text-muted m-2">Coupe</p>
                        
                        <img src={porsh} class="m-2" alt="..."/>
                        <div class="info  d-flex justify-content-between align-items-center">
                            <div class="profile-info">
                                <i class="m-2 text-muted fa-regular fa-user"></i>
                                <p class="d-inline">4</p>
                                <i class="mx-2 text-muted fa-solid fa-vector-square"></i>
                                <p class="d-inline" >manual</p>
                            </div>
                            <div class="price mx-2">
                                <p class=" bolder">$400<span class="text-muted">/d</span> </p>
                            </div>
                           
                        </div>
                    
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="container">
                    <div class="card rounded-4 " >
                        <div class="info  d-flex justify-content-between align-items-center">
                            <h5 class="m-2">Porshe 718 cayman S</h5>
                            <i class="fa-solid text-danger mx-2 fa-heart"></i>
                        </div>
                        <p class="text-muted m-2">Coupe</p>
                        
                        <img src={mercides} class="m-2" alt="..."/>
                        <div class="info  d-flex justify-content-between align-items-center">
                            <div class="profile-info">
                                <i class="m-2 text-muted fa-regular fa-user"></i>
                                <p class="d-inline">4</p>
                                <i class="mx-2 text-muted fa-solid fa-vector-square"></i>
                                <p class="d-inline" >manual</p>
                            </div>
                            <div class="price mx-2">
                                <p class=" bolder">$400<span class="text-muted">/d</span> </p>
                            </div>
                           
                        </div>
                    
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="container">
                    <div class="card rounded-4 " >
                        <div class="info  d-flex justify-content-between align-items-center">
                            <h5 class="m-2">Porshe 718 cayman S</h5>
                            <i class="mx-2 fa-regular fa-heart"></i>
        
                        </div>
                        <p class="text-muted m-2">Coupe</p>
                        
                        <img src={toyouta} class="m-2" alt="..."/>
                        <div class="info  d-flex justify-content-between align-items-center">
                            <div class="profile-info">
                                <i class="m-2 text-muted fa-regular fa-user"></i>
                                <p class="d-inline">4</p>
                                <i class="mx-2 text-muted fa-solid fa-vector-square"></i>
                                <p class="d-inline" >manual</p>
                            </div>
                            <div class="price mx-2">
                                <p class=" bolder">$400<span class="text-muted">/d</span> </p>
                            </div>
                           
                        </div>
                    
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="container">
                    <div class="card rounded-4 " >
                        <div class="info  d-flex justify-content-between align-items-center">
                            <h5 class="m-2">Porshe 718 cayman S</h5>
                            <i class="mx-2 fa-regular  fa-heart"></i>
        
                        </div>
                        <p class="text-muted m-2">Coupe</p>
                        
                        <img src={car} class="m-2" alt="..."/>
                        <div class="info  d-flex justify-content-between align-items-center">
                            <div class="profile-info">
                                <i class="m-2 text-muted fa-regular fa-user"></i>
                                <p class="d-inline">4</p>
                                <i class="mx-2 text-muted fa-solid fa-vector-square"></i>
                                <p class="d-inline" >manual</p>
                            </div>
                            <div class="price mx-2">
                                <p class=" bolder">$400<span class="text-muted">/d</span> </p>
                            </div>
                           
                        </div>
                    
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="container">
                    <div class="card rounded-4 " >
                        <div class="info  d-flex justify-content-between align-items-center">
                            <h5 class="m-2">Porshe 718 cayman S</h5>
                            <i class="mx-2 fa-regular fa-heart"></i>
        
                        </div>
                        <p class="text-muted m-2">Coupe</p>
                        
                        <img src={car1} class="m-2" alt="..."/>
                        <div class="info  d-flex justify-content-between align-items-center">
                            <div class="profile-info">
                                <i class="m-2 text-muted fa-regular fa-user"></i>
                                <p class="d-inline">4</p>
                                <i class="mx-2 text-muted fa-solid fa-vector-square"></i>
                                <p class="d-inline" >manual</p>
                            </div>
                            <div class="price mx-2">
                                <p class=" bolder">$400<span class="text-muted">/d</span> </p>
                            </div>
                           
                        </div>
                    
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="container">
                    <div class="card rounded-4 " >
                        <div class="info  d-flex justify-content-between align-items-center">
                            <h5 class="m-2">Porshe 718 cayman S</h5>
                            <i class="mx-2 fa-regular fa-heart"></i>
        
                        </div>
                        <p class="text-muted m-2">Coupe</p>
                        
                        <img src={car2} class="m-2" alt="..."/>
                        <div class="info  d-flex justify-content-between align-items-center">
                            <div class="profile-info">
                                <i class="m-2 text-muted fa-regular fa-user"></i>
                                <p class="d-inline">4</p>
                                <i class="mx-2 text-muted fa-solid fa-vector-square"></i>
                                <p class="d-inline" >manual</p>
                            </div>
                            <div class="price mx-2">
                                <p class=" bolder">$400<span class="text-muted">/d</span> </p>
                            </div>
                           
                        </div>
                    
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="container">
                    <div class="card rounded-4 " >
                        <div class="info  d-flex justify-content-between align-items-center">
                            <h5 class="m-2">Porshe 718 cayman S</h5>
                            <i class="mx-2 fa-regular fa-heart"></i>
        
                        </div>
                        <p class="text-muted m-2">Coupe</p>
                        
                        <img src={car3} class="m-2" alt="..."/>
                        <div class="info  d-flex justify-content-between align-items-center">
                            <div class="profile-info">
                                <i class="m-2 text-muted fa-regular fa-user"></i>
                                <p class="d-inline">4</p>
                                <i class="mx-2 text-muted fa-solid fa-vector-square"></i>
                                <p class="d-inline" >manual</p>
                            </div>
                            <div class="price mx-2">
                                <p class=" bolder">$400<span class="text-muted">/d</span> </p>
                            </div>
                           
                        </div>
                    
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="container">
                    <div class="card rounded-4 " >
                        <div class="info  d-flex justify-content-between align-items-center">
                            <h5 class="m-2">Porshe 718 cayman S</h5>
                            <i class="mx-2 fa-regular fa-heart"></i>
        
                        </div>
                        <p class="text-muted m-2">Coupe</p>
                        
                        <img src={car4} class="m-2" alt="..."/>
                        <div class="info  d-flex justify-content-between align-items-center">
                            <div class="profile-info">
                                <i class="m-2 text-muted fa-regular fa-user"></i>
                                <p class="d-inline">4</p>
                                <i class="mx-2 text-muted fa-solid fa-vector-square"></i>
                                <p class="d-inline" >manual</p>
                            </div>
                            <div class="price mx-2">
                                <p class=" bolder">$400<span class="text-muted">/d</span> </p>
                            </div>
                           
                        </div>
                    
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="container">
                    <div class="card rounded-4 " >
                        <div class="info  d-flex justify-content-between align-items-center">
                            <h5 class="m-2">Porshe 718 cayman S</h5>
                            <i class="mx-2 fa-regular fa-heart"></i>
        
                        </div>
                        <p class="text-muted m-2">Coupe</p>
                        
                        <img src={car5} class="m-2" alt="..."/>
                        <div class="info  d-flex justify-content-between align-items-center">
                            <div class="profile-info">
                                <i class="m-2 text-muted fa-regular fa-user"></i>
                                <p class="d-inline">4</p>
                                <i class="mx-2 text-muted fa-solid fa-vector-square"></i>
                                <p class="d-inline" >manual</p>
                            </div>
                            <div class="price mx-2">
                                <p class=" bolder">$400<span class="text-muted">/d</span> </p>
                            </div>
                           
                        </div>
                    
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="container">
                    <div class="card rounded-4 " >
                        <div class="info  d-flex justify-content-between align-items-center">
                            <h5 class="m-2">Porshe 718 cayman S</h5>
                            <i class="mx-2 fa-regular fa-heart"></i>
        
                        </div>
                        <p class="text-muted m-2">Coupe</p>
                        
                        <img src={car6} class="m-2" alt="..."/>
                        <div class="info  d-flex justify-content-between align-items-center">
                            <div class="profile-info">
                                <i class="m-2 text-muted fa-regular fa-user"></i>
                                <p class="d-inline">4</p>
                                <i class="mx-2 text-muted fa-solid fa-vector-square"></i>
                                <p class="d-inline" >manual</p>
                            </div>
                            <div class="price mx-2">
                                <p class=" bolder">$400<span class="text-muted">/d</span> </p>
                            </div>
                           
                        </div>
                    
                    </div>
                  </div>
                </div>
              
            
              </div>
            </div>
    
    
    </>

  )
}
