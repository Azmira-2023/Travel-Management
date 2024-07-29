
import  { useState, useEffect } from 'react';
import axios from 'axios';
import TouristSpotsCard from './TouristSpotsCard';


const AlltouristSpots = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchTouristSpots = async () => {
          try {
              const response = await axios.get('https://travel-management-server.vercel.app/add-tourist-spots');
              setTouristSpots(response.data);
          } catch (error) {
              setError('Failed to fetch tourist spots.');
          } finally {
              setLoading(false);
          }
      };

      fetchTouristSpots();
  }, []);

  const sortedTouristSpots = [...touristSpots].sort((a, b) => {
      return sortOrder === 'asc'
          ? a.average_cost - b.average_cost
          : b.average_cost - a.average_cost;
  });

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>{error}</div>;
  }

  return (
      <div className="max-w-6xl mx-auto p-4">
          <h1 className="text-4xl font-bold mb-6 text-center text-white">All Tourist Spots</h1>
          <div className="mb-4">
              <label htmlFor="sortOrder" className="block text-white text-2xl">Sort by Average Cost:</label>
              <select
                  id="sortOrder"
                  className="mt-1 block w-full p-2 border border-black rounded-md shadow-sm focus:ring-lime-900 focus:border-indigo-500"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
              >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
              </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {sortedTouristSpots.map((spot) => (
                <TouristSpotsCard key={spot._id} spot={spot} />
              ))}
          </div>
      </div>
  );
};

export default AlltouristSpots