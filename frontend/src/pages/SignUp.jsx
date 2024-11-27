

import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [phonenumber , setNumber] = useState("");
    const [fullname , setFullname] = useState("");
    const navigate = useNavigate();
    return(
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</p>
                            <input type="text"
                                onChange={(e) => {
                                    setFullname(e.target.value);
                                }}
                             placeholder="Jhon Doe" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required=""/>
                        </div>
                        <div>
                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</p>
                            <input type="text"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                             placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div>
                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</p>
                            <input type="phonenumber"
                            onChange={(e) => {
                                setNumber(e.target.value);
                            }}
                             placeholder="12345" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div>
                            <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</p>
                            <input type="text"
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}
                             placeholder="user@gmail.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                            <input aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div className="ml-3 text-sm">
                            <p className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></p>
                            </div>
                        </div>
                        <button type="submit"
                            onClick={async ()=>{
                                const response = await axios.post("http://localhost:3000/app/v1/signup",{
                                    username,
                                    password,
                                    phonenumber,
                                    fullname
                                });
                                const token = response.data.token;

                                localStorage.setItem('authToken', token);
                                navigate('/home');
                            }}
                         className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border">Create an account</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <Link to={"/signin"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}