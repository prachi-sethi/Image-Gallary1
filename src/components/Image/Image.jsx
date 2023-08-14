import React, { useState } from 'react'
import './Image.css'
import Imagedetail from '../ImageDetailed/Imagedetail'
import { Link } from 'react-router-dom'
import CustomRoutes from '../routes/CustomRoutes'
function Image({desc,title,url,id}) {
  const [imagedetail,setImagedetail] = useState({});
  // setImagedetail({
  //   description:desc,
  //   title1:title,
  //   imageurl:url,
  //   id1:id
  // })
  return (
    
    <div className='imageflex'>
    <Link to={`/image/${id}`}>
    



    <img className='image' src={url} alt="" />
     <button className='button'>Click me</button>
    </Link>
    {/* <Imagedetail desc={desc} title={title} url={url} /> */}
    
    </div>
  

  )
}

export default Image
