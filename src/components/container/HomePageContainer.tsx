import React from 'react'
import Header from '../home/Header'
import Detail from '../home/Detail'
import Actions from '../home/Actions'

// style={{
//     backgroundImage: `linear-gradient(transparent, transparent 1px, rgba(255, 255, 255, 0.1) 1px),
//                       linear-gradient(90deg, transparent, transparent 1px, rgba(255, 255, 255, 0.1) 1px)`,
//     backgroundSize: '20px 20px',
//   }}

const HomePageContainer = () => {
  return (
    <div className='w-full md:px-3 h-screen bg-zinc-950 flex flex-col md:flex-row justify-center items-center' >
      <div className='w-5/6 h-5/6  flex flex-col'>
      <Header/>
      <Detail/>
          </div>
      <Actions/>
        
 
    </div>
  )
}

export default HomePageContainer
