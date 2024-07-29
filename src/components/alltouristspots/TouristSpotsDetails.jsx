
import { useLoaderData } from 'react-router-dom';


const TouristSpotDetails = () => {
    const spotDetails=useLoaderData();
    // console.log(spotDetails);
    return (
        <div className="max-w-4xl mx-auto p-4 text-white text-xl">
            <img src={`${spotDetails?.image}`} alt={`${spotDetails?.name}`}className="w-full h-64 object-cover rounded-md" />
            <h1 className="text-2xl font-bold mt-4"></h1>
            <p className="mt-2">Average Cost: </p>
            <p>Total Visitors Per Year: </p>
            <p>Travel Time:</p>
            <p>Seasonality: </p>
            <p className="mt-4"></p>
        </div>
    );
};

export default TouristSpotDetails;
