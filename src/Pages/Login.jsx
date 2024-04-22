import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../config/firebase";

import { useEffect } from "react";


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {

        auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log('User Logged')
                navigate('/landing')
            }

        })



    }, [])


    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then((res) => {

            navigate('/landing');
            console.log(res)
        }).catch((err) => {
            console.log(err)
            alert('invalid-credential')
        })



        // Simulate login process
        console.log('User logged in:', { email, password });

        // Redirect to homepage/dashboard after login
        // Replace '/home' with your homepage route

    };




    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="p-10 bg-white rounded-lg shadow-md" style={{ width: "75%" }}>
                <h2 className="text-2xl font-bold mb-5 text-gray-800">Welcome to Login page</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                        placeholder="Enter your Email ID"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                        placeholder="Enter your valid password"
                    />
                </div>
                <p className='text-blue-600 cursor-pointer my-2' onClick={() => navigate("/signup")}>New user? Register here</p>
                <button onClick={handleLogin} type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-100 ">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login