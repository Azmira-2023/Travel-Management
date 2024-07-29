import { Link, useNavigate } from "react-router-dom";

const TouristSpotsCard = (spot) => {
//   console.log(spot.spot);
  const spots = spot?.spot;
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg shadow-md p-4 m-2 text-white text-xl">
      <img
        src={spots?.image}
        alt={spots?.tourist_spot_name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{spot.tourist_spot_name}</h2>
      <p>Average Cost: ${spots?.average_cost}</p>
      <p>Total Visitors Per Year: {spots?.totalVisitorsPerYear}</p>
      <p>Travel Time: {spots?.travel_time}</p>
      <p>Seasonality: {spots?.seasonality}</p>
      <Link to={`/tourist-spots/${spots?._id}`}>
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    View Details
  </button>
</Link>
    </div>
  );
};

export default TouristSpotsCard;
