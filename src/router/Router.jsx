import AddtouristSpots from "@/components/addtouristspots/AddtouristSpots";
import AlltouristSpots from "@/components/alltouristspots/AlltouristSpots";
import TouristSpotsDetails from "@/components/alltouristspots/TouristSpotsDetails";
import Home from "@/components/home/Home";
import TouristSpots from "@/components/home/touristspot/TouristSpot";
import Login from "@/components/login/Login";
import MyList from "@/components/mylist/MyList";
import NotFound from "@/components/page/NotFound";
import Register from "@/components/register/Register";
import UpdateTouristSpot from "@/components/updatepage/UpdateTouristSpot";
import UserList from "@/components/userlist/UserList";
import RootLayout from "@/root/RootLayout";
import { createBrowserRouter } from "react-router-dom";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/country/:country",
                element: <TouristSpots />,
            },
            {
                path: "/all-tourist-spots",
                element: <AlltouristSpots />,
            },
            {
                path: "/add-tourist-spot",
                element: <AddtouristSpots />,
            },
            {
                path: "/user-list",
                element: <UserList />,
            },
            {
                path: "/all-tourist-spots",
                element: <AlltouristSpots />,
            },
            {
                path: "/tourist-spots/:id",
                element: <TouristSpotsDetails />,
                loader:({params})=>fetch(`https://travel-management-server.vercel.app/tourist-spot/${params.id}`)
            },
            {
                path: "/my-list",
                element: <MyList />,
            },
            
            {
                path: "/update-tourist-spot/:id",
                element: <UpdateTouristSpot />,
                loader:({params})=>fetch(`https://travel-management-server.vercel.app/tourist-spot/${params.id}`)
            },
            {
                path: "/*",
                element: <NotFound />,
            },
            
        ],
    },
]);

export default Router