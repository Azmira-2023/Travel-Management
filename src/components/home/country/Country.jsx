import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bangladesh from '../../../assets/country/Bangladesh.jpg'; 
import Indonesia from '../../../assets/country/indonesia.jpg'; 
import Thailand from '../../../assets/country/Thailand.jpg'; 
import Malaysia from '../../../assets/country/Malaysia.jpg'; 
import Vietnam from '../../../assets/country/vietnam.jpg'; 
import Cambodia from '../../../assets/country/combodia.jpg'; 

const imageMap = {
  'Bangladesh': Bangladesh,
  'Indonesia': Indonesia,
  'Thailand': Thailand,
  'Malaysia': Malaysia,
  'Vietnam': Vietnam,
  'Cambodia': Cambodia,
};

const Country = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://travel-management-server.vercel.app/country-name')
      .then(response => {
        console.log('Response status:', response.status); // Debugging
        return response.json();
      })
      .then(data => {
        console.log('Fetched countries:', data); // Debugging
        setCountries(data);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  return (
    <div className="mt-20 container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Explore Our Travel Destinations</h1>
      
      <div className="grid grid-cols-3 gap-4">
        {countries.length === 0 && (
          <p className="text-white text-center col-span-3">No countries available.</p>
        )}
        {countries.map(country => (
          <div 
            key={country._id} 
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition duration-500 hover:scale-105"
          >
            <img className="w-full h-48 object-cover" src={imageMap[country.name]} alt={country.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">{country.name}</div>
              <p className="text-white text-base">{country.description}</p>
              <Link to={`/country/${country.name}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded mt-4 inline-block">
                View Tourist Spots
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;





























// import React from 'react';
// import { Link } from 'react-router-dom';
// import Bangladesh from '../../../assets/country/Bangladesh.jpg'; 
// import Indonesia from '../../../assets/country/indonesia.jpg'; 
// import Thailand from '../../../assets/country/Thailand.jpg'; 
// import Malaysia from '../../../assets/country/Malaysia.jpg'; 
// import Vietnam from '../../../assets/country/vietnam.jpg'; 
// import Cambodia from '../../../assets/country/combodia.jpg'; 

// const Country = () => {
//   const countries = [
//     {
//       id: 1,
//       name: 'Bangladesh',
//       image: Bangladesh, 
//       description: 'Bangladesh is known for its lush greenery and many waterways.',
//     },
//     {
//       id: 2,
//       name: 'Thailand',
//       image: Thailand, 
//       description: 'Thailand is known for tropical beaches, opulent royal palaces, ancient ruins, and ornate temples.',
//     },
//     {
//       id: 3,
//       name: 'Indonesia',
//       image: Indonesia,
//       description: 'Indonesia is a Southeast Asian country made up of thousands of volcanic islands.',
//     },
//     {
//       id: 4,
//       name: 'Malaysia',
//       image: Malaysia,
//       description: 'Malaysia is known for its beaches, rainforests, and mix of Malay, Chinese, Indian, and European cultural influences.',
//     },
//     {
//       id: 5,
//       name: 'Vietnam',
//       image: Vietnam,
//       description: 'Vietnam is known for its beaches, rivers, Buddhist pagodas, and bustling cities.',
//     },
//     {
//       id: 6,
//       name: 'Cambodia',
//       image: Cambodia,
//       description: 'Cambodia is known for its temples, particularly Angkor Wat.',
//     },
//   ];

//   return (
//     <div className="mt-20 container mx-auto">
//       <h1 className="text-4xl font-bold mb-6 text-white text-center">Explore Our Travel Destinations</h1>
      
//       <div className="grid grid-cols-3 gap-4">
//         {countries.map(country => (
//           <div 
//             key={country.id} 
//             className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition duration-500 hover:scale-105"
//           >
//             <img className="w-full h-48 object-cover" src={country.image} alt={country.name} />
//             <div className="px-6 py-4">
//               <div className="font-bold text-xl mb-2 text-white">{country.name}</div>
//               <p className="text-white text-base">{country.description}</p>
//               <Link to={`/country/${country.name}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded mt-4 inline-block">
//                 View Tourist Spots
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Country;
