/* eslint-disable react/prop-types */
import { useState } from "react";
import CategoryBtnProduct from "../CategoryBtnProduct/CategoryBtnProduct";

const BodyHome = ({allProducts}) => {
    const [isActive, setIsActive] = useState("allProduct");
    const handleTabClick = (tab) => {
        setIsActive(tab);
    }

    return (
        <div className="w-11/12 mx-auto mt-[491px]">
            <h2 className="text-center font-bold text-4xl text-[#0B0B0B]">Explore Cutting-Edge Gadgets</h2>
            <div className="flex lg:flex-row flex-col gap-6 mt-12 pb-24">
                <div className="w-1/5 bg-white rounded-2xl p-6 flex flex-col gap-6 h-fit">
                    <button onClick={() => handleTabClick("allProduct")} className={`w-full py-3.5 px-5 text-lg rounded-full ${isActive === "allProduct" ? 'bg-[#9538E2] text-white font-extrabold' : 'font-medium text-gray-500 bg-gray-100'}`}>All Product</button>

                    <button onClick={() => handleTabClick("computers")} className={`w-full py-3.5 px-5 text-lg rounded-full ${isActive === "computers" ? 'bg-[#9538E2] text-white font-extrabold' : 'font-medium text-gray-500 bg-gray-100'}`}>Computers</button>

                    <button onClick={() => handleTabClick("phones")} className={`w-full py-3.5 px-5 text-lg rounded-full ${isActive === "phones" ? 'bg-[#9538E2] text-white font-extrabold' : 'font-medium text-gray-500 bg-gray-100'}`}>Phones</button>

                    <button onClick={() => handleTabClick("smartWatches")} className={`w-full py-3.5 px-5 text-lg rounded-full ${isActive === "smartWatches" ? 'bg-[#9538E2] text-white font-extrabold' : 'font-medium text-gray-500 bg-gray-100'}`}>Smart Watches</button>

                    <button onClick={() => handleTabClick("chargers")} className={`w-full py-3.5 px-5 text-lg rounded-full ${isActive === "chargers" ? 'bg-[#9538E2] text-white font-extrabold' : 'font-medium text-gray-500 bg-gray-100'}`}>Chargers</button>
                </div>

                <div className="w-4/5 ">
                    <CategoryBtnProduct isActive={isActive} allProducts={allProducts} />
                </div>
            </div>
        </div>
    );
};

export default BodyHome;