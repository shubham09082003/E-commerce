import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"


export const Product = () => {
    const { id } = useParams();
    const [product , setProduct] = useState([]);

    const fetchProductDetails =  async () => {
        const response = await axios.get(`http://localhost:3000/app/v1/product/find/${id}`);
        setProduct(response.data.response);
    }

    useEffect(() => {
        fetchProductDetails();
    }, [id]);
    
    return(
        <section class="text-gray-700 body-font overflow-hidden bg-white">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class=" w-48 object-cover object-center rounded border border-gray-200" src={product.image} />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                        <p class="leading-relaxed">{product.detail}</p>
                    </div>
                    <div class="flex flex-col">
                        <span class="title-font text-2xl text-gray-900 mt-4 font-bold ">Rs. {product.price}</span>
                        <div className="flex mt-4">
                        <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">BuyNow</button>
                        <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}