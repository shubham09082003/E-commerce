import { useState } from "react"
import { useNavigate } from 'react-router-dom';


export const Card = ({image,price,description,name,id }) => {
    const navigate = useNavigate();

    const handelProductClick = () => {
        navigate(`/product/${id}`);
    }

    return( 
        <div>
            <div 
            onClick={handelProductClick}
            className="relative m-10 w-full max-w-xs max-h-88 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="object-cover" src={image} alt="product image" />
            </div>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                    <span className="text-3xl font-bold text-slate-900">Rs.{price}</span>
                </p>
                </div>
                <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to cart</a>
            </div>
            </div>
        </div>

    )
}