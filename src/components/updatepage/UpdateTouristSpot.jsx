import React from "react";
import { toast, ToastContainer } from "react-toastify";
import SweetAlert from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";

const UpdateTouristSpot = () => {
    const spot=useLoaderData();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const imageUrl = form.imageUrl.value;
        const tourist_spot_name = form.touristSpotName.value;
        const country_name = form.countryName.value;
        const location = form.location.value;
        const average_cost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const description = form.description.value;
      
        const data = {
          imageUrl,
          tourist_spot_name,
          country_name,
          location,
          average_cost,
          seasonality,
          travel_time,
          totalVisitorsPerYear,
          description,
        };
      
        fetch(`https://travel-management-server.vercel.app/update-tourist-spot/${spot?._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              console.log(data); // Debugging: Check the response data
              toast.success('Data Updated Successfully');
            }
          })
          .catch((error) => {
            console.error("Error updating data:", error); // Debugging: Catch and log any errors
            toast.error('Failed to update data');
          });
      };
      
  
 
  return (
    <div className="container mx-auto p-8 text-white bg-cyan-900 text-xl">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Update Tourist Spot
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            defaultValue={spot?.imageUrl}
            
            className="border rounded w-full p-2 text-black"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block">Tourist Spot Name</label>
            <input
              type="text"
              name="touristSpotName"
              defaultValue={spot?.tourist_spot_name}
              
              className="border rounded w-full p-2 text-black"
            />
          </div>
          <div className="flex-1">
            <label className="block">Country Name</label>
            <input
              type="text"
              name="countryName"
              defaultValue={spot?.country_name}
              
              className="border rounded w-full p-2 text-black"
            />
          </div>
        </div>
        <div>
          <label className="block">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={spot?.location}
            
            className="border rounded w-full p-2 text-black"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block">Average Cost</label>
            <input
              type="text"
              name="averageCost"
              defaultValue={spot?.average_cost}
              
              className="border rounded w-full p-2 text-black"
            />
          </div>
          <div className="flex-1">
            <label className="block">Seasonality</label>
            <input
              type="text"
              name="seasonality"
              defaultValue={spot?.seasonality}
              
              className="border rounded w-full p-2 text-black"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block">Travel Time</label>
            <input
              type="text"
              name="travelTime"
              defaultValue={spot?.travel_time}
              
              className="border rounded w-full p-2 text-black"
            />
          </div>
          <div className="flex-1">
            <label className="block">Total Visitors Per Year</label>
            <input
              type="text"
              name="totalVisitorsPerYear"
              defaultValue={spot?.totalVisitorsPerYear}
              
              className="border rounded w-full p-2 text-black"
            />
          </div>
        </div>
        <div>
          <label className="block">Short Description</label>
          <textarea
            name="description"
            defaultValue={spot?.description}
            
            className="border rounded w-full p-2 text-black"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-cyan-950 text-white rounded p-3 px-8"
          >
            Update
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateTouristSpot;
