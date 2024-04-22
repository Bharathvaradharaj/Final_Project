
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../config/firebase"

const Signup = () => {
    const [name, setName] = useState('')

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password).then((res) => {

            console.log(res)
            navigate('/'); // Replace '/login' with your login page route
        }).catch((err) => {
            alert('email-already-in-use')
            console.log(err)

        })


        // Simulate user registration process
        console.log('User registered:', { name, email, password });
        // After registration, redirect to the login page
        
    };


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="p-10 bg-white rounded-lg shadow-lg" style={{ width: "70%" }}>
                <h2 className="text-2xl font-bold mb-5 text-gray-800">Welcome to Sign Up page</h2>

                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                        placeholder="Enter your Name"

                    />
                </div>


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

                <p className='text-blue-600 cursor-pointer my-2' onClick={() => navigate("/")}> Already have an account? Login here</p>
                <button onClick={handleSubmit} type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out">
                    Register
                </button>
            </form>
        </div>
    )
}

export default Signup