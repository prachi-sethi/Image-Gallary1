import React, { useEffect, useState } from 'react';
import './ImagePage.css';
import Image from '../Image/Image';
import axios from 'axios';

function ImagePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadApi() {
    setIsLoading(true);
    const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=20');
    const pics = response.data.photos;
    
    const imageList = pics.map((p) => ({
      title: p.title,
      id: p.id,
      desc: p.description,
      url: p.url,
    }));

    setData(imageList);
    console.log(data)
    setIsLoading(false);
  }

  useEffect(() => {
    loadApi();
  }, []);

  useEffect(() => {
    console.log('new loading', isLoading);
  }, [isLoading]);

  // Separate the console.log from JSX rendering
  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className='wrapper'>
      {data.map((i) => (
        <Image desc={i.desc} key={i.id} title={i.title} url={i.url} id={i.id}></Image>
      ))}
   
    </div>
  );
}

export default ImagePage;