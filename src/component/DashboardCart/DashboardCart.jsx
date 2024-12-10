/* eslint-disable react/prop-types */

import { TiDeleteOutline } from "react-icons/ti";

const DashboardCart = ({product, handleRemoveProductLists}) => {
    const { product_id, product_title, product_image, price, description } = product;

    return (
        <div className="flex items-center gap-8 p-8 bg-white rounded-2xl ">
            <div className="">
                <img src={product_image} alt="" className="w-[274px] h-[192px] object-contain" />
            </div>
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-2xl text-[#09080F]">{product_title}</h3>
                    <button onClick={()=> handleRemoveProductLists(product_id)} className="text-[#FF0000] text-4xl" >
                        <TiDeleteOutline />
                    </button>
                </div>
                <p className="font-normal text-lg text-gray-600 mt-3">{description}</p>
                <p className="text-xl font-semibold text-gray-800 my-4">Price: $ {price}</p>
            </div>
        </div>
    );
};

export default DashboardCart;