import { Add, PlayArrow} from '@mui/icons-material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import React, { useState } from 'react'
import './listitem.scss'


function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false)
    const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <img src="https://flixpatrol.com/runtime/cache/files/posters/k/w350/kqsez4byitnbitav1tjnx1a6iff.webp" alt="" />
        {isHovered && (
            <>  
    <video src={trailer} autoPlay={true} loop></video>
      
      <div className="itemInfo">
        <div className='icons'>
            <PlayArrow className='icon'/>
            <Add className='icon'/>
            <ThumbUpOffAltIcon className='icon'/>
            <ThumbDownOffAltIcon className='icon'/>
        </div>
        <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className='limit'>+16</span>
            <span>1999</span>
        </div>
        <div className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates id aut quisquam animi, ut iusto odit doloremque rerum sunt deleniti quam 
        </div>
        <div className="genre">Action</div>
      </div>
      </>
        )}
        
    </div>
  )
}

export default ListItem
