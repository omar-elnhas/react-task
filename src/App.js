import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css';

import Booking from "./Components/Booking/Booking"
import MasterLayOut from './Components/MasterLayOut/MasterLayOut';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {

  let routs= createHashRouter([
    {path:'/',
    element:<MasterLayOut />,children:[
      {index:true,element:
      (  <Booking />)},
      {path:'dashboard',element:
      (  <Dashboard />)}
 ] }])


  return (
   <>
   <RouterProvider router={routs}/>
   
   </>
  );
}

export default App;
