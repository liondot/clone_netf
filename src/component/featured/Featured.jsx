import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import React from 'react'
import './featured.scss'

function Featured({type}) {
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === 'movie' ? "Movies" : "Series" }</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
      <img src="https://springtribune.com/wp-content/uploads/2021/11/ginny-georgia-season-2.jpg" alt="" />
      <div className="info">
        <img src="https://www.pngarts.com/files/1/Netflix-Logo-Free-PNG-Image.png" alt="" />
        <span className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi quisquam veniam cum sed porro vel sit deleniti quas delectus iure eum repellendus, quo dolor ratione consequatur sequi ad nam dignissimos.
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more"> 
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
 
  )
}

export default Featured
