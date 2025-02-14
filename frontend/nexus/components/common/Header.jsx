// import React from 'react'
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <>
      <header className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg position-fixed">
			<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
				<h1 className="text-2xl font-semibold text-gray-500 capitalize">{title}</h1>
			</div>
      </header>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header