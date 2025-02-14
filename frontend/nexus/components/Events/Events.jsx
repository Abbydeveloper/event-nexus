// import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";


function Events() {

  const [searchFilter, setSearchFilter] = useState("");
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState(events);

  
  // Function to fetch data using Axios
  
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchFilter(term);

    const filtered = events.filter(product => product?.name.includes(term) || product?.category.includes(term) )
    setFilteredEvents(filtered);
  }

  useEffect(() => {

    const fetchData = async () => {
        const token = JSON.parse(sessionStorage.getItem('token'));
        
        const response = await axios.get(
          "http://localhost:3000/api/v1/events",
          {
            headers: {
                'Authorization': `Bearer ${token}`
            }}
        );
        const allEvents = response.data.data
        setEvents(allEvents)
        
  setFilteredEvents(allEvents)
        // return response.data.data
      }

    fetchData()
      .catch(console.error);
  }, []);

  return (
    <>
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <div className="bg-white font-semibold bg-opacity-300 rounded-xl p-6 border-gray-700 -mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-600">Events List</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                className="bg-gray-200 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleSearch}
                value={searchFilter}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-600">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Event Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Venue</th>
                    {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th> */}
                    {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Tickets Sold</th> */}
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-500">
                  {/* {console.log(filteredEvents)} */}
                  {/* {filteredEvents.map(event => {
                    <tr key={event.id}>
                      <td>{event.title}</td>
                    </tr>
                  })} */}
                  {filteredEvents.map(event => (
                    <tr key={event.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 gap-2 items-center">
                        {event.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 gap-2 items-center">
                        {event.venue}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500 gap-2 items-center">
                        {event.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </main>
    </>
  )
}

export default Events