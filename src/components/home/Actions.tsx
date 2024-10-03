import React from 'react'
import { Button } from '../ui/button'

const Actions = () => {
  return (
    <div className=" h-24 w-5/6 md:w-1/6 md:h-5/6 bg-transparent flex p-1 gap-2 justify-between md:flex-col items-center">
    <div className="w-1/4 h-3/4 bg-gray-500/[.05] rounded-xl md:w-full md:h-1/4 flex justify-center items-center">
    <Button variant="secondary">New</Button>

     </div>
     <div className="w-1/4 h-3/4 bg-gray-500/[.05] md:w-full md:h-1/4 flex justify-center items-center">
    <Button variant="secondary">Insert</Button>

     </div>
     <div className="w-1/4 h-3/4 bg-gray-500/[.05] md:w-full md:h-1/4 flex justify-center items-center">
    <Button variant="secondary">Save</Button>

     </div>
     <div className="w-1/4 h-3/4 bg-gray-500/[.05] md:w-full md:h-1/4 flex justify-center items-center">
    <Button variant="secondary">Print</Button>

     </div>
   
  </div>
  )
}

export default Actions
