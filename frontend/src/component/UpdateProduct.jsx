import axios from "axios";
import { useState } from "react"
import { useNavigate , useParams } from "react-router-dom";

export const UpdateProduct = () => {
    const { id } = useParams();
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [detail,setDetail] = useState("");
    const [category,setCategory] = useState("");
    const [image,setImage] = useState("");
    const navigate = useNavigate();

    async function handleProduct(){
        const token = localStorage.getItem("token");
        const response = await axios.put(`http://localhost:3000/app/v1/product/update/${id}`,{
            name,
            price,
            detail,
            category,
            image
        },
        {   headers: {
            Authorization: `${localStorage.getItem("authToken")}`,
            }
        }
        )
        alert(response)
    }

    function handel () {
        navigate('/admin');
    }


    return (
        <div>
                <button
                onClick={handel}
                 type="button" className="ml-4 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
                    <svg className="rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>




                <div className="flex flex-col w-96 m-auto">
                <div className="m-auto mt-4 font-bold text-lg text-black">
                    <h5>Update Product</h5>
                </div>
                <div class="mb-3">
                    <label className="block mb-1 text-sm font-medium text-gray-900">Product Name</label>
                    <input type="text"
                    onChange={(e)=>{
                        setName(e.target.value);
                    }} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div class="mb-3">
                    <label className="block mb-1 text-sm font-medium text-gray-900">Price</label>
                    <input type="text"
                        onChange={(e)=>{
                        setPrice(e.target.value);
                    }}   
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div class="mb-3">
                    <label className="block mb-1 text-sm font-medium text-gray-90">Description</label>
                    <input type="text"
                        onChange={(e)=>{
                        setDetail(e.target.value);
                    }}   
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div class="mb-3">
                    <label className="block mb-1 text-sm font-medium text-gray-900">Category</label>
                    <input type="text"
                        onChange={(e)=>{
                        setCategory(e.target.value);
                    }} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div class="mb-3">
                    <label className="block mb-1 text-sm font-medium text-gray-900">Image Url</label>
                    <input type="text" 
                    onChange={(e)=>{
                        setImage(e.target.value);
                    }}                 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <button type="button" 
                onClick={handleProduct}
                className="w-full mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
            </div>
        </div>
    )
}