/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductsCard = ({product}) => {
    const { product_id, product_title, price, product_image } = product;
    
    return (
        <div className="card bg-white p-5 h-full flex flex-col">
            <figure className="mb-6 flex-grow">
                <img src={product_image} alt="Shoes" className="rounded-xl object-cover" />
            </figure>
            <div className="">
                <h2 className="font-semibold text-2xl text-[#09080F]">{product_title}</h2>
                <p className="mb-4 mt-3 font-medium text-xl text-gray-500">Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/productDetails/${product_id}`} className="py-3.5 px-5 font-semibold text-lg text-[#9538E2] border-2 border-[#9538E2] rounded-full hover:bg-[#9538E2] hover:text-white hover:font-bold">View Details</Link>
                </div>
            </div>
        </div> 
    );
};

export default ProductsCard;