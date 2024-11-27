
import { Link } from 'react-router-dom';


export const Card2 = ({image,price,description,name,id }) => {

    return( 
        <div>
            <div 
            className="relative m-10 w-full max-w-xs max-h-88 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <div 
            className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="object-cover" src={image} alt="product image" />
            </div>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                    <span className="text-lg text-slate-900">{description}</span>
                </p>
                </div>
                <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                    <span className="text-3xl font-bold text-slate-900">Rs.{price}</span>
                </p>
                </div>
                <Link to={`/update/${id}`} href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Update</Link>
            </div>
            </div>
        </div>

    )
}