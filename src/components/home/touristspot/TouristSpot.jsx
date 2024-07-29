import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Import images
import Sundarban from '../../../assets/Bangladesh/sundarban.jpg';
import Coxsbazar from '../../../assets/Bangladesh/coxs_bazar.jpg';
import Rangamati from '../../../assets/Bangladesh/rangamati.jpg';
import SaintMartin from '../../../assets/Bangladesh/saint_martin.jpeg';
import Bandarban from '../../../assets/Bangladesh/bandarban.jpg';
import Bangkok from '../../../assets/Thailand/bangkok.jpg';
import ChiangMai from '../../../assets/Thailand/chiang_mai.jpg';
import Ayutthaya from '../../../assets/Thailand/ayutthaya.jpg';
import Phuket from '../../../assets/Thailand/phuket.jpg';
import PhiPhiIslands from '../../../assets/Thailand/phi_phi_islands.jpg';
import Bali from '../../../assets/Indonesia/bali.jpg';
import BorobudurTemple from '../../../assets/Indonesia/borobudur_temple.jpg';
import KomodoNationalPark from '../../../assets/Indonesia/komodo_national_park.jpg';
import RajaAmpatIslands from '../../../assets/Indonesia/raja_ampat_islands.jpg';
import Yogyakarta from '../../../assets/Indonesia/yogyakarta.jpg';
import KualaLumpur from '../../../assets/Malaysia/kuala_lumpur.jpg';
import Langkawi from '../../../assets/Malaysia/langkawi.jpg';
import Penang from '../../../assets/Malaysia/penang.jpg';
import CameronHighlands from '../../../assets/Malaysia/cameron_highlands.jpg';
import TamanNegara from '../../../assets/Malaysia/taman_negara.jpg';
import HaLongBay from '../../../assets/Vietnam/ha_long_bay.jpg';
import HoChiMinhCity from '../../../assets/Vietnam/ho_chi_minh_city.jpg';
import HoiAn from '../../../assets/Vietnam/hoi_an.jpg';
import PhongNhaCaves from '../../../assets/Vietnam/phong_nha_caves.jpg';
import MekongDelta from '../../../assets/Vietnam/mekong_delta.jpg';
import AngkorWat from '../../../assets/Cambodia/angkor_wat.jpg';
import SiemReap from '../../../assets/Cambodia/siem_reap.jpg';
import PhnomPenh from '../../../assets/Cambodia/phnom_penh.jpg';
import Kep from '../../../assets/Cambodia/kep.jpg';
import BokorNationalPark from '../../../assets/Cambodia/bokor_national_park.jpg';

// Create a map of image names to imported images
const imageMap = {
  'sundarban.jpg': Sundarban,
  'coxs_bazar.jpg': Coxsbazar,
  'rangamati.jpg': Rangamati,
  'saint_martin.jpg': SaintMartin,
  'bandarban.jpg': Bandarban,
  'bangkok.jpg': Bangkok,
  'chiang_mai.jpg': ChiangMai,
  'ayutthaya.jpg': Ayutthaya,
  'phuket.jpg': Phuket,
  'phi_phi_islands.jpg': PhiPhiIslands,
  'bali.jpg': Bali,
  'borobudur_temple.jpg': BorobudurTemple,
  'komodo_national_park.jpg': KomodoNationalPark,
  'raja_ampat_islands.jpg': RajaAmpatIslands,
  'yogyakarta.jpg': Yogyakarta,
  'kuala_lumpur.jpg': KualaLumpur,
  'langkawi.jpg': Langkawi,
  'penang.jpg': Penang,
  'cameron_highlands.jpg': CameronHighlands,
  'taman_negara.jpg': TamanNegara,
  'ha_long_bay.jpg': HaLongBay,
  'ho_chi_minh_city.jpg': HoChiMinhCity,
  'hoi_an.jpg': HoiAn,
  'phong_nha_caves.jpg': PhongNhaCaves,
  'mekong_delta.jpg': MekongDelta,
  'angkor_wat.jpg': AngkorWat,
  'siem_reap.jpg': SiemReap,
  'phnom_penh.jpg': PhnomPenh,
  'kep.jpg': Kep,
  'bokor_national_park.jpg': BokorNationalPark,
};

const TouristSpots = () => {
  const { country } = useParams();
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    const fetchTouristSpots = async () => {
      try {
        const response = await axios.get(`https://travel-management-server.vercel.app/tourist-spots`);
        const spots = response.data.filter(spot => spot.country === country);
        setTouristSpots(spots);
      } catch (error) {
        console.error('Error fetching tourist spots:', error);
      }
    };

    fetchTouristSpots();
  }, [country]);

  return (
    <div className="mt-20 container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">{country} Tourist Spots</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {touristSpots.map(spot => {
          const imageSrc = imageMap[spot.image] || ''; // Fallback to empty string if image not found
          
          return (
            <div key={spot.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition duration-500 hover:scale-105">
              {imageSrc && (
                <img
                  className="w-full h-48 object-cover"
                  src={imageSrc}
                  alt={spot.name}
                />
              )}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{spot.name}</div>
                <p className="text-white text-base">Location: {spot.location}</p>
                <p className="text-white text-base">Description: {spot.description}</p>
                <p className="text-white text-base">Average Cost: {spot.averageCost}</p>
                <p className="text-white text-base">Seasonality: {spot.seasonality}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TouristSpots;
