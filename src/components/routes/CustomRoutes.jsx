import React from 'react'
import {Route,Routes} from 'react-router-dom'
import ImagePage from '../ImagePage/ImagePage'
import Imagedetail from '../ImageDetailed/Imagedetail'
import Image from '../Image/Image'
import { useLocation } from 'react-router-dom'
function CustomRoutes() {


  return (
    <Routes>
        <Route path='/' element={<ImagePage/>}></Route>
        <Route path='/image/:id' element={<Imagedetail ></Imagedetail>}></Route>
      
    </Routes>
  )
}

export default CustomRoutes
