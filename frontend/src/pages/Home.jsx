        import axios from "axios";
        import { useEffect, useState } from "react"
        import { Card } from "../component/Card";

        export const Home = ({ filter }) =>{
            const [product, setProduct] = useState([]);

            useEffect(()=>{
                const getItem = async () => {
                    try {
                        const response = await axios.get(
                            `http://localhost:3000/app/v1/product/bulk?filter=${filter}`
                        );
                        setProduct(response.data.data);
                    } catch (err) {
                        console.error("Error fetching products:", err);
                        setError("Failed to fetch products. Please try again later.");
                    }
                }
                getItem();
            },[filter]);


            return (
                <div className="grid grid-cols-4">
                    {product.map((pro) => (
                            <Card
                                key={pro._id}
                                id={pro._id}
                                name={pro.name}
                                description={pro.description}
                                price={pro.price}
                                image={pro.image}
                            />
                        ))}
                </div>
            )
        }