import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Card2 } from "../component/Card2";

export const AdminHome = () =>{
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const getItem = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/app/v1/product/bulk"
                );
                setProduct(response.data.data);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to fetch products. Please try again later.");
            }
        }
        getItem();
    },[]);

    function handel ( ) {
        navigate('/addproduct')
    }

    return (
        <div>
            <button type="button" 
            onClick={handel}
            class=" mt-4 ml-7 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Product</button>
            <div className="grid grid-cols-4">
            {product.map((pro) => (
                    <Card2
                        key={pro._id}
                        id={pro._id}
                        name={pro.name}
                        description={pro.detail}
                        price={pro.price}
                        image={pro.image}
                    />
                ))}
            </div>
        </div>
    )
}