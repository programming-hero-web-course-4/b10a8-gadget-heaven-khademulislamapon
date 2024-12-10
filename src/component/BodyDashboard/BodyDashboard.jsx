/* eslint-disable react/prop-types */

import DashboardCart from "../DashboardCart/DashboardCart";
import DashboardWishlist from "../DashboardWishlist/DashboardWishlist";
import btnIcon from "../../assets/Frame.png"
import groupIcon from "../../assets/Group.png"

const BodyDashboard = ({ isActive, products, wishLists, handleremoveWishLists, handleRemoveProductLists, handleSort, calculateTotalPrice, handleClear, reload, setReload }) => {

    return (
        <div className="my-12 mb-24 w-11/12 mx-auto">
            {isActive === "cart" && (
                <div className="pb-72">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="font-bold text-[#0B0B0B] text-2xl">Cart</h2>
                        <div className="flex items-center gap-4">
                            <h3 className="mr-2 font-bold text-[#0B0B0B] text-2xl">Total cost: $ {calculateTotalPrice()}</h3>
                            <button onClick={handleSort} className="py-3 px-5 font-bold text-lg rounded-[32px] bg-white text-[#9538E2] flex items-center border-2 border-[#9538E2]">
                                <p>Sort by Price</p>
                                <div className="text-2xl ml-2.5">
                                    <img src={btnIcon} alt="" />
                                </div>
                            </button>
                            {/* document.getElementById('my_modal_5').showModal() */}
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="py-3 px-6 font-medium text-lg hover:text-[#9538E2] hover:bg-white rounded-[32px] bg-[#9538E2] text-white border-2 hover:border-[#9538E2]">Purchase</button>
                        </div>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box p-8 text-center">
                                <div className="flex justify-center mb-6">
                                    <img src={groupIcon} alt="" className="object-cover" />
                                </div>

                                <h5 className="font-bold text-2xl text-[#09080F]">Payment Successfully</h5>

                                <div className="divider my-3"></div>

                                <h6 className="mb-3 text-base font-medium text-gray-600">Thanks for purchasing.</h6>
                                <h6 className="text-base font-medium text-gray-600">Total: $ {calculateTotalPrice()}</h6>

                                <div className="modal-action mt-4">
                                    <form method="dialog" className="w-full">
                                        <button onClick={handleClear} className="w-full bg-[#EAE9E9] rounded-[32px] py-2.5 font-semibold text-[#09080F] text-base">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>

                    <div className="space-y-6">
                        {
                            products.map(product => <DashboardCart key={product.product_id} product={product} handleRemoveProductLists={handleRemoveProductLists} />)
                        }
                    </div>
                </div>
            )}
            {isActive === "wishlist" && (
                <div className="pb-24">
                    <h2 className="mb-8 font-bold text-[#0B0B0B] text-2xl">WishList</h2>

                    <div className="space-y-8">
                        {
                            wishLists.map(wish => <DashboardWishlist key={wish.product_id} wish={wish} handleremoveWishLists={handleremoveWishLists} reload={reload} setReload={setReload} />)
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default BodyDashboard;