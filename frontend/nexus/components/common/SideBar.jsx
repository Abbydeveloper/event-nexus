// import React from 'react'
import { Link } from 'react-router-dom';
import { 
  BarChart2,
  // Settings,
  ShoppingBag,
  // TrendingUp,
  Users
} from "lucide-react";
import { useState } from 'react';

import style from './sidebar.module.css';

const SIDEBAR_ITEMS = [
  { name: "Dashboard", icon: BarChart2, color: "#6366f1", href: "/dashboard" },
	{ name: "Events", icon: ShoppingBag, color: "#8B5CF6", href: "/events" },
	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
	// { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	// { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
]
function SideBar() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);

  return (
    <div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${sideBarIsOpen ? "w-64" : "w-20"}`}>
      <div className="h-full bg-white bg-opacity-50 p-4 flex flex-col rounded-lg border-gray-7001">
        <div className="cursor-pointer" onClick={() => setSideBarIsOpen(!sideBarIsOpen)}>
          <div className={style.logo}>
            <img src='../../src/assets/logo.png' alt='Event Nexus logo' />
            {sideBarIsOpen && <h2><span>Event </span><span>Nexus</span></h2>}
          </div>
        </div>

        {/* <div className={style["menu--list"]}>
          <Link to="/" className={style["item"]}>Dashboard</Link>
          <Link to="/events" className={style["item"]}>Events</Link>
          <Link to="/users" className={style["item"]}>Users</Link>
        </div> */}
      
        <nav className='mt-1 flex-grow text-gray-900'>
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}>
							<div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 hover:text-gray-100 transition-colors mb-2'>
								<item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
									{sideBarIsOpen &&
										(<span className='ml-4 whitespace-nowrap'>
											{item.name}
										</span>)
                  }
							</div>
						</Link>
					))}
				</nav>
      </div>
    </div>
  )
};

export default SideBar;