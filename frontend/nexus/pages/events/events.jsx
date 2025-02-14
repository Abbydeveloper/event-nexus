// import React from 'react'
import Header from "../../components/common/Header"
import Events from "../../components/Events/Events"

function EventsPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Events" />
      <Events />
    </div>
  )
}

export default EventsPage