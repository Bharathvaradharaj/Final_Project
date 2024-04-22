import Navbar from "../Components/Navbar"
import { useState } from "react";
import { signOut } from "firebase/auth"
import auth from "../config/firebase"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
const Landing = () => {
    const navigate = useNavigate()

    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [addproject, setAddproject] = useState(false)

    useEffect(() => {

        auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log('User Logged')
            } else {
                console.log("logout")
                // navigate('/')

            }

        })



    }, [])


    function logout() {

        signOut(auth)
        navigate('/')
    }

    const handleform = (e) => {

        e.preventDefault();
    }


  


    return (
        <>

            <div className="flex  justify-between items-center h-auto bg-gray-100 sm:w-auto md:w-auto  flex-wrap">


                <Navbar logout={logout} setAddproject={setAddproject}></Navbar>








            </div>

            {
                addproject &&
                <div className="flex  flex-col justify-between items-center h-auto bg-gray-100 " >
                    <h2 className="text-center text-5xl font-bold mb-14">Add  <span className='text-blue-400'>Projects</span></h2>

                    {/* Blog creation form */}
                    <div className="blog-creation-form mb-8" style={{ width: "80%", margin: "auto" }}>
                        <form onClick={handleform} className="flex flex-col gap-4">
                            <label className="block text-gray-700 text-4xl">Project Title</label>
                            <input
                                type="text"
                                placeholder="Project Title"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className="p-2 border rounded"
                                required
                            />

                            <label className="block text-gray-700 text-2xl">Project Description</label>
                            <textarea
                                placeholder="Project Description"
                                value={newContent}
                                onChange={(e) => setNewContent(e.target.value)}
                                className="p-2 border rounded"
                                rows="4"
                                required
                            />
                            <label className="block text-gray-700 text-4xl"> Studtent Email</label>
                            <input
                                type="text"
                                placeholder="Student Email"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className="p-2 border rounded"
                                required
                            />




                            <button type="submit" className="bg-blue-400 text-white p-2 rounded hover:bg-blue-600">
                                Invite
                            </button>
                        </form>
                    </div>
                </div>
            }

        </>
    )
}




export default Landing


{/* <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
                    {blogs.map((blog) => (
                        <div key={blog._id} className="blog-post mb-8 p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="blog-title font-semibold text-2xl text-gray-800 mb-3">{blog.newTitle}</h3>
                            <p className="blog-date text-gray-400 text-sm mb-4">{blog.date}</p>
                            <p className="blog-content text-gray-600 mb-4">{blog.newContent}</p>
                            <span className="text-blue-500 cursor-pointer" onClick={() => handleLike(blog._id)}>Like</span>
                            <span className="ml-2">{blog.likes} Likes</span>
                        </div>
                    ))}
                </div> */}





                