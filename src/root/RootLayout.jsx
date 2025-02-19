import Footer from "@/components/shared/footer/Footer"
import Navbar from "@/components/shared/navbar/Navbar"
import { Outlet } from "react-router-dom"


const RootLayout = () => {
  return (
    <main>
        <Navbar/>
        <Outlet/>
        <Footer/>
    
    </main>
  )
}

export default RootLayout