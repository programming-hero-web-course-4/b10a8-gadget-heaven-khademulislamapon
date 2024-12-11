/* eslint-disable react/prop-types */
import { TiDeleteOutline } from "react-icons/ti";
import { addToStoredProductList } from "../../utility/utility";

const DashboardWishlist = ({ wish, handleremoveWishLists, reload, setReload }) => {

    const handleAddToCart = (id) => {
        addToStoredProductList(id);
        setReload(!reload)
        // toast.success("Item added to Cart")
    }

    const { product_id, product_title, product_image, price, description } = wish;

    return (
        <div className="flex items-center gap-8 p-8 bg-white rounded-2xl ">
            <div className="">
                <img src={product_image} alt="" className="w-[274px] h-[192px] object-contain" />
            </div>
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-2xl text-[#09080F]">{product_title}</h3>
                    <button onClick={()=> handleremoveWishLists(product_id)} className="text-[#FF0000] text-4xl">
                        <TiDeleteOutline />
                    </button>
                </div>
                <p className="font-normal text-lg text-gray-600 mt-3">
                    <span  className="font-semibold text-lg text-[#09080F]">Description:</span> {description}</p>
                <p className="text-xl font-semibold text-gray-800 my-4">Price: $ {price}</p>
                <button onClick={() => handleAddToCart(product_id)} className="py-3 px-6 font-medium text-lg hover:text-gray-500 hover:bg-gray-100 rounded-[32px] bg-[#9538E2] text-white">Add To Card</button>
            </div>
        </div>
    );
};

export default DashboardWishlist;