// import React from 'react
import { useEffect, useState } from "react";
import { Card } from "../../components/common/Card.jsx";
import { CalendarClock, CalendarDays, CalendarRange, Plus, UsersIcon } from 'lucide-react';
import { Link } from "react-router-dom";


function Dashboard() {

  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const firstName = sessionStorage.getItem('firstName');
    setFirstName(JSON.parse(firstName))
  }, []);
  return (
    <>
      
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}

        <h2 className="mt-1 mb-1 text-3xl font-bold text-gray-900">Welcome, <span className="text-red-800">{firstName}</span></h2>

        <div>
          <h3 className="py-4 text-lg font-semibold text-gray-700">Events you are managing</h3>

          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
            <Card name="Past Events" icon={CalendarClock} value="1" color="#6366F1" />
            <Card name="Upcoming Events" icon={CalendarDays} value="1" color="#8B5CF6" />
            <Card name="All Events" icon={CalendarRange} value="1" color="#10B981" />
            <Card name="Registered Attendees" icon={UsersIcon} value="0" color="#EC4899" />
          </div>
        </div>

        <div  className='grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2 mb-4'>
          <div>
            <h3 className="pt-10 pb-3 text-lg font-semibold text-gray-700">Events you registered for</h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2 mb">
              <Card name="Past Events" icon={CalendarClock} value="0" color="#6366F1" />
              <Card name="Upcoming Events" icon={CalendarDays} value="0" color="#8B5CF6" />
            </div>
          </div>

          
          {/* <div>
            <h3>Recommended events</h3>
            <div>
              <Card name="Past Events" icon="" value="0" color="" />
              <Card name="Upcoming Events" icon="" value="0" color="" />
            </div>
          </div> */}
        </div>
        <div  className='grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2 py-8'>
          <div>
            <h3 className="mt-5 mb-4 text-1xl font-semibold text-gray-900">Quick Actions</h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 mb text-center">
              <Link to="/events" className="p-15 border-3 border-dashed border-green-700 flex justify-center">
                <div className="text-green-700">
                  <Plus size={30} style={{  minWidth: "20px" }} />
                </div>
              </Link>
              
            </div>
          </div>
        </div>
				{/* <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
					<StatCard name='Total Events' icon={Zap} value='$12,345' color='#6366F1' />
					<StatCard name='New Users' icon={Users} value='1,234' color='#8B5CF6' />
					<StatCard name='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
					<StatCard name='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' />
				</div> */}

				{/* CHARTS */}

				{/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart />
					<CategoryDistributionChart />
					<SalesChannelChart />
				</div> */}
			</main>
    </>
  )
}

export default Dashboard