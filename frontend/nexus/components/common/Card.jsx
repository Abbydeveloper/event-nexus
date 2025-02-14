// import React from 'react'
import PropTypes from "prop-types";


export const Card = ({ name, icon: Icon, value, color }) => {
	return (
		<div
			className='bg-gray-50 bg-opacity-100 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-200'
		>
			<div className='px-4 py-5 sm:p-6'>
				<p className='flex items-center text-sm font-medium text-gray-400'>
					<Icon size={40} className='mr-2' style={{ color }} />
					<span className="pl-3">{name}</span>
				</p>
				<p className='mt-1 text-3xl font-semibold text-gray-900 text-center'>{value}</p>
			</div>
		</div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
