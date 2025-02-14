// import React from 'react'
import { useState } from "react";

const USER_DATA = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
	{ id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
]


function User() {

  const [searchFilter, setSearchFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(USER_DATA);
  
    const handleSearch = (e) => {
      const term = e.target.value;
      setSearchFilter(term);
  
      const filtered = USER_DATA.filter(user => {
        if (user && user.name)
          return user.name.toLowerCase().includes(term.toLowerCase()) || user.category.toLowerCase().includes(term.toLowerCase()) 
        return ""  
      })
      setFilteredUsers(filtered);
    }
  return (
    <>
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <div className="bg-white font-semibold bg-opacity-300 rounded-xl p-6 border-gray-700 -mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-600">Users List</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status Sold</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-500">
                  {filteredUsers.map(user => (
                    <tr key={user.id}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
                              {user.name.charAt(0)}
                            </div>
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-500'>{user.name}</div>
                          </div>
                        </div>
                      </td>

                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gra00'>{user.email}</div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
                          {user.role}
                        </span>
                      </td>

                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.status === "Active"
                              ? "bg-green-800 text-green-100"
                              : "bg-red-800 text-red-100"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                        <button className='text-indigo-400 hover:text-indigo-300 mr-2'>Edit</button>
                        <button className='text-red-400 hover:text-red-300'>Delete</button>
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

export default User