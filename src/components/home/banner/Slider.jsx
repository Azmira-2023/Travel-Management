import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="mt-8 border border-white text-white">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-auto object-cover"
              src="https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Mountain Adventure"
            />
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Next Adventure</h1>
        <p className="text-lg md:text-2xl mb-8">Explore the world with our travel management services</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-auto object-cover"
              src="https://images.pexels.com/photos/26051261/pexels-photo-26051261/free-photo-of-a-small-echidna-is-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Wildlife Expedition"
            />
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
              <div className="text-center">
                <h3 className="text-6xl font-bold">Wildlife Expedition</h3>
                <p className="text-lg">Discover unique wildlife in their natural habitats on our guided tours.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-auto object-cover"
              src="https://images.pexels.com/photos/9789456/pexels-photo-9789456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="City Lights"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
              <div className="text-center">
                <h3 className="text-6xl font-bold">City Lights</h3>
                <p className="text-lg">Experience the vibrant city life with our exclusive city tours.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
