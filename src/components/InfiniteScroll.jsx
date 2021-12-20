import React,{useState,useEffect} from 'react'
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

function InfiniteScroll() {
  
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
     setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => setPhotos(data))
    .then(setLoading(false));
  },[])
  return (
    <div className="image-grd">
      {
        loading ? <h1 className="center">Loading...</h1> : photos.map((p)=>(
        <div style={{width:"250px",height:"250px"}}>
            <img  src={p.url} />
        </div>
         ))
      }


      {/* <Lightbox images={photos} />
      {console.log(photos)} */}

    </div>
  )
}

export default InfiniteScroll
