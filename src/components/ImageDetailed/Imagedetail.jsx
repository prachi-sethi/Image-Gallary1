import React, { useEffect,useState } from 'react'
import './Imagedetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Imagedetail() {
  const [details, setdetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
const {id}=useParams();
// async function loadApis()
// {
//   setIsLoading(true);
//   const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=20');
//   const data1 = response.data.photos;
 
//   const imagedetail = data1.map((p) => {
//     if (p.id === id) {
//       title:p.title;
//       desc:p.description;
      

      
//     }
 
//   });
//   console.log(imagedetail)
//   // setdetails(imageDetails1);
//   setIsLoading(false);


// }
// useEffect(()=>{
//   loadApis();
// },[])
console.log(id);
  return (
  <div className='maindiv'>
    {/* {isLoading?'Loading...':() */}
 {isLoading?'Loading...':<div><div  className='first' >
        <img src={`https://api.slingacademy.com/public/sample-photos/${id}.jpeg`} alt="" />
        </div>
       
        <div className='second'>
        {/* <h3>{title}</h3>
        <h5>{desc}</h5>  */}
         </div></div>}
       


    </div>
  )
}

export default Imagedetail
