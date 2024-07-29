import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const MyList = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTouristSpots = async () => {
      try {
        const response = await axios.get(
          "https://travel-management-server.vercel.app/add-tourist-spots",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setTouristSpots(response.data);
      } catch (error) {
        setError("Failed to fetch your tourist spots.");
        toast.error("Failed to fetch your tourist spots.");
      } finally {
        setLoading(false);
      }
    };

    fetchTouristSpots();
  }, []);

  const handleUpdate = () => {
    navigate(`/update-tourist-spot`);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://travel-management-server.vercel.app/delete-tourist-spot/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setTouristSpots((prev) => prev.filter((spot) => spot._id !== id));
      toast.success("Tourist spot deleted successfully.");
    } catch (err) {
      toast.error("Failed to delete tourist spot.");
    }
  };




  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">My Tourist Spots</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b border-gray-700 text-left">
                Image
              </th>
              <th className="py-3 px-4 border-b border-gray-700 text-left">
                Name
              </th>
              <th className="py-3 px-4 border-b border-gray-700 text-left">
                Average Cost
              </th>
              <th className="py-3 px-4 border-b border-gray-700 text-left">
                Location
              </th>
              <th className="py-3 px-4 border-b border-gray-700 text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {touristSpots.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-4 text-center">
                  No tourist spots available.
                </td>
              </tr>
            ) : (
              touristSpots.map((spot) => (
                <tr key={spot._id} className="hover:bg-gray-700">
                  <td className="py-3 px-4 border-b border-gray-700">
                    <img
                      src={spot.image}
                      alt={spot.tourist_spot_name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {spot.tourist_spot_name}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    ${spot.average_cost}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700">
                    {spot.location}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-700 flex space-x-2">
                    <Link to={`/update-tourist-spot/${spot?._id}`}>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      >
                        Update
                      </button>
                    </Link>
                    <Link>
                    <button
                      onClick={() => handleDelete(spot._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>

                    </Link>

                    
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
