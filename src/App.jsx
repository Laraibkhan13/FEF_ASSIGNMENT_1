import React from "react"
import {BrowserRouter, Routes,Route, Link} from "react-router-dom"
import UserProfiles from "./components/UserProfiles"
import ProductInfo from "./components/ProductInfo"

function App() {
  
<BrowserRouter></BrowserRouter>
  return (
    
    <BrowserRouter>
      
      <div className=" flex ">
        <div className="  border-solid border-2 border-black rounded-md p-2  m-2 bg-black text-gray-200">
          <Link to="/profile" >User Profiles (QUESTION 1) </Link>
        </div>
        <div className="  border-solid border-2 border-black rounded-md p-2  m-2 bg-black text-gray-200 ">
          <Link to="/product">Products (QUESTION 2)</Link>
        </div>
      </div>
      <Routes>
        <Route path="/profile" element={<UserProfiles/>}></Route>
        <Route path="/product" element={<ProductInfo/>}></Route>
      </Routes>
    
    </BrowserRouter>
      
      
    
    
  )
}

export default App
