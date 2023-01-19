import React from 'react'
import Featured from '../../component/featured/Featured';
import Navbar from '../../component/Navbar';
import List from '../../list/List';
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured type="movie"/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home
