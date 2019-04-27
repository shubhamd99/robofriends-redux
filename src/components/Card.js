import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
	return (
            
            <div className='tc dib br3 pa3 ma3 grow bw3 shadow-5 card'>
             <img alt='robots' src={`https://robohash.org/${id}?100x100`}  />
               <div>
                   <h2>{name}</h2>
                   <p>{email}</p>
               </div>
             </div>
		);
}

export default Card;
