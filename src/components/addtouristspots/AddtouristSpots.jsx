import { AuthContext } from '@/Context/AuthContext';
import React, { useContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddtouristSpots = () => {
    const { user } = useContext(AuthContext);
    
    const [formData, setFormData] = useState({
        image: '',
        tourist_spot_name: '',
        country_name: '',
        location: '',
        description: '',
        average_cost: '',
        seasonality: '',
        travel_time: '',
        totalVisitorsPerYear: '',
        userEmail: '',
        userName: '',
    });

    useEffect(() => {
        if (user) {
            setFormData((prevData) => ({
                ...prevData,
                userEmail: user.email || '',
                userName: user.displayName || '',
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://travel-management-server.vercel.app/addtouristspots-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Tourist spot added successfully!');
                setFormData({
                    image: '',
                    tourist_spot_name: '',
                    country_name: '',
                    location: '',
                    description: '',
                    average_cost: '',
                    seasonality: '',
                    travel_time: '',
                    totalVisitorsPerYear: '',
                    userEmail: user.email,
                    userName: user.displayName || '',
                });
            } else {
                toast.error('Failed to add tourist spot. Please try again.');
                console.error('Failed to add tourist spot:', response.statusText);
            }
        } catch (error) {
            toast.error('Failed to add tourist spot. Please try again.');
            console.error('Error adding tourist spot:', error);
        }
    };

    return (
        <div className="mx-auto p-8">
            <h1 className="text-4xl font-bold mb-6 text-center text-white">Add Tourist Spot Form</h1>
            <form className="max-w-screen-md mx-auto bg-gray-700 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                {[
                    { label: 'Image URL', name: 'image', type: 'text' },
                    { label: 'Tourist Spot Name', name: 'tourist_spot_name', type: 'text' },
                    { label: 'Country Name', name: 'country_name', type: 'text' },
                    { label: 'Location', name: 'location', type: 'text' },
                    { label: 'Short Description', name: 'description', type: 'text' },
                    { label: 'Average Cost', name: 'average_cost', type: 'text' },
                    { label: 'Seasonality', name: 'seasonality', type: 'text' },
                    { label: 'Travel Time', name: 'travel_time', type: 'text' },
                    { label: 'Total Visitors Per Year', name: 'totalVisitorsPerYear', type: 'text' },
                ].map(({ label, name, type }) => (
                    <div className="mb-4" key={name}>
                        <label className="block text-white text-sm font-bold mb-2" htmlFor={name}>
                            {label}
                        </label>
                        <input
                            className="w-full px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
                            id={name}
                            type={type}
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="userEmail">
                        User Email
                    </label>
                    <input
                        className="w-full px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
                        id="userEmail"
                        type="email"
                        name="userEmail"
                        value={formData.userEmail}
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="userName">
                        User Name
                    </label>
                    <input
                        className="w-full px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
                        id="userName"
                        type="text"
                        name="userName"
                        value={formData.userName?.displayName}
                     
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-black hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddtouristSpots;
