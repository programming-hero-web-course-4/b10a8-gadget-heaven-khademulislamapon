/* eslint-disable react/prop-types */
import { useState } from "react";
import BodyDashboard from "../BodyDashboard/BodyDashboard";

const HeroDashboard = ({products, wishLists, handleremoveWishLists, handleRemoveProductLists, handleSort, calculateTotalPrice, handleClear, reload, setReload}) => {
    const [isActive, setIsActive] = useState("cart");

    const handleTabClick = (tab) => {
        setIsActive(tab);
    }

    return (
        <>
            <div className="text-center py-8 bg-[#9538E2]">
                <h2 className="font-bold text-3xl text-white">Dashboard</h2>
                <p className="text-white mt-4 w-5/6 md:w-4/5 lg:w-3/5 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className="space-x-6 mt-8">
                    <button onClick={() => handleTabClick("cart")} className={`border border-white py-3.5 px-16 rounded-full text-lg font-extrabold ${isActive === "cart" ? 'bg-white text-[#9538E2]' : 'text-white'}`}>Cart</button>

                    <button onClick={() => handleTabClick("wishlist")} className={`border border-white py-3.5 px-16 rounded-full text-lg font-extrabold ${isActive === "wishlist" ? 'bg-white text-[#9538E2]' : 'text-white'}`}>Wishlist</button>
                </div>
            </div >

            <BodyDashboard isActive={isActive} products={products} wishLists={wishLists} handleremoveWishLists={handleremoveWishLists} handleRemoveProductLists={handleRemoveProductLists} handleSort={handleSort} calculateTotalPrice={calculateTotalPrice} handleClear={handleClear} reload={reload} setReload={setReload} />
        </>
    );
};

export default HeroDashboard;