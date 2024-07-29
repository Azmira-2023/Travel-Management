import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserList = () => {
 
    const [touristSpots, setTouristSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTouristSpots = async () => {
            try {
                const response = await fetch('https://travel-management-server.vercel.app/add-tourist-spots');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTouristSpots(data);
            } catch (error) {
                setError(error.message);
                toast.error('Failed to fetch tourist spots.');
            } finally {
                setLoading(false);
            }
        };

        fetchTouristSpots();
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center text-white">Tourist Spots Table</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-700 text-white rounded-lg shadow-md">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 border-b border-gray-600 text-left">Image</th>
                            <th className="py-3 px-4 border-b border-gray-600 text-left">Tourist Spot Name</th>
                            <th className="py-3 px-4 border-b border-gray-600 text-left">Country</th>
                            <th className="py-3 px-4 border-b border-gray-600 text-left">Location</th>
                            <th className="py-3 px-4 border-b border-gray-600 text-left">Description</th>
                            <th className="py-3 px-4 border-b border-gray-600 text-left">Average Cost</th>
                            <th className="py-3 px-4 border-b border-gray-600 text-left">Seasonality</th>
                            <th className="py-3 px-4 border-b border-gray-600 text-left">Travel Time</th>
                            <th className="py-3 px-4 border-b border-gray-600 text-left">Total Visitors</th>
                            <th className="py-3 px-4 border-b border-gray-600 text-left">User Name</th>
                            <th className="py-3 px-4 border-b border-gray-600 text-left">User Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {touristSpots.length === 0 ? (
                            <tr>
                                <td colSpan="11" className="py-4 text-center">No tourist spots available.</td>
                            </tr>
                        ) : (
                            touristSpots.map((spot) => (
                                <tr key={spot._id} className="hover:bg-gray-600">
                                    <td className="py-3 px-4 border-b border-gray-600">
                                        <img src={spot.image} alt={spot.tourist_spot_name} className="w-20 h-20 object-cover rounded-lg" />
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-600">{spot.tourist_spot_name}</td>
                                    <td className="py-3 px-4 border-b border-gray-600">{spot.country_name}</td>
                                    <td className="py-3 px-4 border-b border-gray-600">{spot.location}</td>
                                    <td className="py-3 px-4 border-b border-gray-600">{spot.description}</td>
                                    <td className="py-3 px-4 border-b border-gray-600">{spot.average_cost}</td>
                                    <td className="py-3 px-4 border-b border-gray-600">{spot.seasonality}</td>
                                    <td className="py-3 px-4 border-b border-gray-600">{spot.travel_time}</td>
                                    <td className="py-3 px-4 border-b border-gray-600">{spot.totalVisitorsPerYear}</td>
                                    <td className="py-3 px-4 border-b border-gray-600">{spot.userName}</td>
                                    <td className="py-3 px-4 border-b border-gray-600">{spot.userEmail}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default UserList


