import "./Dashboard.css"
import first from "../../Assets/DashbardImg/Ellipse_15-removebg-preview.png"
import second from "../../Assets/DashbardImg/Ellips.jpg"
import third from "../../Assets/DashbardImg/Ellipse (1).jpg"
import fourth from "../../Assets/DashbardImg/Ellipse y(1).jpg"
import car1 from "../../Assets/DashbardImg/car.png"
import car2 from "../../Assets/DashbardImg/maruti-suzuki-suzuki-swift-car-suzuki-9c5818c39cb279f9dc7f844d7769288f.png"
import car3 from "../../Assets/DashbardImg/mini-countryman-car-bmw-mini-cooper-mini-406b2a24c59d99a8096f336f22982573.png"
import vector1 from "../../Assets/DashbardImg/Vector.png"
import vector2 from "../../Assets/DashbardImg/Vector (1).png"
import vector3 from "../../Assets/DashbardImg/Vector (2).png"
import vector4 from "../../Assets/DashbardImg/Vector (3).png"
import LineChart from './../LineChart/LineChart';
import BarChart from "../BarChart/BarChart"




export default function Dashboard() {



  return (
    <>
    
    <div class="container Dashboard bg-light rounded-4">
                <div class="row">
                    <div class="col-md-3">
                        <div class="container rounded-3 text-center text-white my-3">
                            <div class="chart rounded-4">
                                <i class="fa-solid my-4 fa-bolt"></i>
                            <p class=" fw-bolder">Energy</p>
                            <img src={first} class="my-4 " alt=""/>
                            <span class="d-block fw-bolder">45%</span>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-md-3">
                        <div class="container rounded-3 text-center text-dark my-3">
                            <div class="chart-1 bg-white rounded-4">
                                <i class="fa-solid my-4 fa-arrows-up-down"></i>
                                                    <p class=" fw-bolder">Range</p>
                            <img src={second} class="my-4" alt=""/>
                            <span class="d-block fw-bolder">157K%</span>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-md-3">
                        <div class="container rounded-3 text-center text-dark my-3">
                            <div class="chart-2 bg-white rounded-4">
                                <i class="fa-solid my-4 fa-droplet text-primary "></i>
                                                    <p class=" fw-bolder">Break Fluide</p>
                            <img src={third} class="my-4" alt=""/>
                            <span class="d-block fw-bolder">9%</span>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-md-3">
                        <div class="container rounded-3 text-center text-dark my-3">
                            <div class="chart-3 bg-white rounded-4">
                                <i class="fa-solid my-4 text-danger fa-shield"></i>
                            <p class=" fw-bolder">Tire Wear</p>
                            <img src={fourth} class="my-4" alt=""/>
                            <span class="d-block fw-bolder">25%</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="container bg-white my-4 rounded-4">
                            <div class="text">
                                <h4 class="p-4"><span class="fw-bolder">Miles</span> statistics</h4>
                                    <div class="d-flex justify-content-evenly align-items-center">
                                        <div class="container d-flex justify-content-between align-items-center">
                                            <div class="buttons">
                                                <button class="btn my-2 btn-info text-light rounded-4 mx-2">day</button>
                                                <button class="btn my-2 text-dark border-0  mx-2 text-light">week</button>
                                                <button class="btn my-2 text-dark border-0 mx-2 text-light">month</button>
                                            </div>
                                                <h6 class="m-4">256 Miles</h6>
                                        </div>
                                        
                                    </div>
                                    
                            </div>
                           
                            <BarChart/>
                        </div>
                    </div>
        
        
        
                    <div class="col-md-6">
                        <div class="container bg-white my-4 rounded-4">
                            <div class="text">
                                <h4 class="p-4"><span class="fw-bolder">car</span> statistics</h4>
                                    <div class="d-flex justify-content-evenly align-items-center">
                                        <div class="container d-flex justify-content-between align-items-center">
                                            <h6 class="m-4">20 February 2022</h6>
                                            
                                            <div class="buttons">
                                                <button class="btn my-2 btn-danger text-light mx-2">day</button>
                                                <button class="btn my-2 btn-danger mx-2 text-light">week</button>
                                                <button class="btn my-2 btn-danger mx-2 text-light">month</button>
                                            </div>
                                                
                                        </div>
                                        
                                    </div>
                                    
                            </div>
                            <LineChart/>
                            
        
                        </div>
                    </div>
                </div>
        
        
            <div class="row pb-4">
                <div class="col-md-4 my-3">
                    <div class="container mini rounded-4">
                        <div class="recommend pt-4">
                            <img  src={vector1} class=" mx-2 " alt=""/>
                        <p class="fw-bold d-inline mt-3 ">64% Recommended</p>
                        </div>
                        <img src={car1} class="my-3" alt=""/>
                        <p class="fw-bold mx-2 ">mini cooper</p>
                        <div class="d-flex justify-content-between align-items-center py-4">
                            <div class="right">
                                <img src={vector2} class=" mx-2" alt=""/>
                        <p class="fw-bold d-inline mx-2 text-muted ">132k</p>
                        <img src={vector3} class=" mx-2" alt=""/>
                        <img src={vector4} class=" mx-2" alt=""/>
        
                            </div>
                            <div class="left ">
                            <p class="text-muted m-auto">$32/h</p>
                            </div>
                        </div>
        
        
                    </div>
                </div>
                <div class="col-md-4 my-3">
                    <div class="container porsh rounded-4">
                        <div class="recommend pt-4">
                            <img  src={vector1} class=" mx-2 " alt=""/>
                        <p class="fw-bold d-inline mt-3 ">74% Recommended</p>
                        </div>
                        <img src={car2} class="my-3" alt=""/>
                        <p class="fw-bold mx-2 ">Porsche 911 carrera</p>
                        <div class="d-flex justify-content-between align-items-center py-4">
                            <div class="right">
                                <img src={vector2} class=" mx-2" alt=""/>
                        <p class="fw-bold d-inline mx-2 text-muted ">130k</p>
                        <img src={vector3} class=" mx-2" alt=""/>
                        <img src={vector4} class=" mx-2" alt=""/>
        
                            </div>
                            <div class="left ">
                            <p class="text-muted m-auto">$28/h</p>
                            </div>
                        </div>
        
        
                    </div>
                </div>
                <div class="col-md-4 my-3">
                    <div class="container porshe rounded-4">
                        <div class="recommend pt-4">
                            <img  src={vector1} class=" mx-2 " alt=""/>
                        <p class="fw-bold d-inline mt-3 ">74% Recommended</p>
                        </div>
                        <img src={car3} class="my-3" alt=""/>
                        <p class="fw-bold mx-2 ">Porsche 911 carrera</p>
                        <div class="d-flex justify-content-between align-items-center py-4">
                            <div class="right">
                                <img src={vector2} class=" mx-2" alt=""/>
                        <p class="fw-bold d-inline mx-2 text-muted ">130k</p>
                        <img src={vector3} class=" mx-2" alt=""/>
                        <img src={vector4} class=" mx-2" alt=""/>
        
                            </div>
                            <div class="left ">
                            <p class="text-muted m-auto">$28/h</p>
                            </div>
                        </div>
        
        
                    </div>
                </div>
            </div>
        
              
            </div>
    
    </>
  )
}
