import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import './Navbar.css'
import { signOut } from "firebase/auth"
import auth from "../config/firebase"
import { useEffect } from "react"
import { useState } from "react"
const Navbar = ({logout, setAddproject}) => {
    const [showForm, setShowForm] = useState(true);

    const toggleForm = () => {
        setShowForm(!showForm);
        setAddproject(!showForm);
        console.log(showForm)
        
    };
    


    


    return (
        // <div className="flex  justify-between items-center h-auto bg-gray-100 sm:w-auto md:w-auto  flex-wrap">
        <>
            <div>
                <h2 className="text-2xl font-bold mb-5 text-gray-800 p-10 w-fit">Welcome Bharath</h2>
            </div>

            <div className="flex gap-3 justify-center items-center mx-2">

                <input
                    className="mt-1 px-2 py-3 w-96 border rounded-md border-black outline-none"
                    placeholder="Search Here"
                    type="search">
                </input>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-100 ">Search</button>
            </div>
            <div className="flex gap-6 px-2 ">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-100 " onClick={toggleForm}>
                    Add Project
                </button>

                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-100 ">

                    View Project
                </button>

            </div>

            <div className="px-2">

                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-100 " onClick={logout.logout}>
                    Logout
                </button>
            </div>


        </>
        // </div>
    )
}

export default Navbar