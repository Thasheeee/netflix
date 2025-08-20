import React, { useEffect,useState } from 'react'
import './Player.css'
import backArrowIcon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'

const Player = () => {

  const {id} =useParams();

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjY5ODYxZTA0OWYyZDBmNDgxNThjMTA0ZWMxM2NjYSIsIm5iZiI6MTc1NTY3NjA4Ni4zNDIwMDAyLCJzdWIiOiI2OGE1N2RiNjU1YWM4M2FiMDk1ZGQzNDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SjO_w-sGZEHIs0OI-5Yd5nKmilm3btnexWa5jgYvkRw'
  }
};

useEffect(() => {
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

},[])



  return (
    <div className='player'>

      <img src={backArrowIcon} alt=""></img>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player