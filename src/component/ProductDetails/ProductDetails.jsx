import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import Star from "../../assets/starIcon.png";
import { addToStoredProductList, addToStoredWishlistList } from "../../utility/utility";

const ProductDetails = () => {
    const { productId } = useParams()
    const data = useLoaderData()

    const [product, setProduct] = useState([]);
    useEffect(() => {
        const findProduct = data.find(p => p.product_id === productId)
        setProduct(findProduct)
    }, [data, productId])

    const { product_id, product_title, product_image, price, description, specifications, availability, rating } = product;

    const handleAddToCart = (id) => {
        addToStoredProductList(id);
        // toast.success("Item added to Cart");
    }
    const handleWishlist = (id) => {
        addToStoredWishlistList(id);
        // toast.success("Item added to Wish List");
    }
    const [wishList, setWishList] = useState(false);
    const toggleDisabled = () => {
        setWishList(!wishList)
    }

    return (
        <div>
            <NavBar />

            <div className="relative">
                <div className="text-center bg-[#9538E2] pt-8 pb-[235px]">
                    <h2 className="font-bold text-3xl text-white">Product Details</h2>
                    <p className="text-white mt-4 w-5/6 md:w-4/5 lg:w-3/5 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>

                <div className="w-11/12 rounded-3xl p-8 bg-white absolute top-[45%] left-[4.1%] flex justify-between items-center gap-8">
                    <div className="w-2/5">
                        <img src={product_image} alt="" className="object-cover" />
                    </div>
                    <div className="w-3/5 flex flex-col gap-4">
                        <div className="space-y-3">
                            <h3 className="text-3xl font-semibold text-[#09080F]">{product_title}</h3>
                            <p className="text-xl font-semibold text-gray-800">Price: $ {price}</p>
                        </div>
                        <p className="border border-[#309C08] py-2 px-3.5 text-[#309C08] rounded-[32px] w-fit bg-green-50 font-medium text-sm">{availability ? 'In Stock' : 'out of stock'}</p>
                        <p className="text-lg font-normal text-gray-600">{description}</p>
                        <div>
                            <h4 className="text-lg font-bold text-[#09080F] mb-3">Specification:</h4>
                            <ol className="list-decimal list-inside">
                                {Array.isArray(specifications) && specifications.length > 0 ? (specifications.map((li, i) => <li className="text-lg font-normal text-gray-600" key={i}>{li}</li>)) : (<li>No specifications available</li>)}
                            </ol>
                        </div>
                        <div>
                            <div className="mb-3 flex items-center gap-1">
                                <h3 className="font-bold text-lg text-[#09080F]">Rating</h3>
                                <div className="w-5 h-5">
                                    <img src={Star} alt="" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F9C004]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F9C004]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F9C004]" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F9C004]" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#F9C004]" />
                                </div>
                                <div className="bg-gray-200/70 rounded-[32px] font-medium text-sm text-gray-800 py-2 px-3.5">{rating}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button onClick={() => handleAddToCart(product_id)} className="py-3 px-5 font-bold text-lg hover:text-gray-500 hover:bg-gray-100 rounded-[32px] bg-[#9538E2] text-white flex items-center">
                                <p>Add To Card</p>
                                <div className="text-2xl ml-2.5">
                                    <PiShoppingCartBold />
                                </div>
                            </button>

                            <button disabled={wishList} onClick={() => { handleWishlist(product_id); toggleDisabled(); }} className={`p-3 rounded-full ${wishList ? 'text-gray-400 bg-gray-300' : 'hover:border-[#9538E2] hover:bg-[#9538E2] hover:text-white bg-white text-[#3A3A3A] border'}`}>
                                <div className="text-2xl">
                                    <FiHeart />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[464px]"></div>
        </div>
    );
};

export default ProductDetails;