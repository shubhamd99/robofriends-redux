import React from 'react'

const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div className='pa2'>
		   <input
		   className='pa3 ba b--green bg-lightest-blue w-50 shadow-4 br3 mb4' 
		   type='search' 
		   placeholder='search robots'
		   onChange={searchChange}
		   />
		</div>
	);
}

export default SearchBox;