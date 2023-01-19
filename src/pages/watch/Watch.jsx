import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import './watch.scss'

function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
            home
        </div>
<video className='video' autoPlay progress controls src="https://download-video.akamaized.net/2/playback/7058bfb8-59f3-4818-932a-b27338923f85/8bcb5e9a-bfedf236?__token__=st=1674063362~exp=1674077762~acl=%2F2%2Fplayback%2F7058bfb8-59f3-4818-932a-b27338923f85%2F8bcb5e9a-bfedf236%2A~hmac=839f95c100bce8921dca75f659296ef86d1afb9a27b954c4a15f1cfb7a526c93&r=dXM%3D"></video>
    </div>
  )
}

export default Watch
