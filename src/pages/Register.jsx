import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../axios";
import { toast } from "react-toastify";
import { RegisterService } from "../services/authService";

export default function Register() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const naviagate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        try {

            const response =await RegisterService({ name, email, password});
            // setMessage(response.data.message);
            toast.success(response.data.message);
            naviagate('/login')

        }
        catch (error) {

            if (error.response && error.response.data.message) {
                // setMessage(error.response.data.message);
            toast.error(error.response.data.message);

            } else {

                // setMessage(error.message);
            toast.error(error.message);


            }

        }
        finally {
            setLoading(false);


        }

    };


    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

                <input
                    id="name"
                    className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required />
                <input id="email"
                    className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required />
                <input
                    id="password"
                    className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required />

                <button className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">

                    {loading ? "Submiting" : "Create Account"}

                </button>

                {/* {message && (<p>{message}</p>)} */}

                <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 underline">Log In</Link></p>
            </form>
        </div>
    );
}