import { FiHeart } from "react-icons/fi";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import HeroImg from '../../assets/banner.jpg';

const HeroHome = () => {

    const links = <>
        <li className="text-base underline">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white font-medium'}>Home</NavLink>
        </li>
        <li className="text-base">
            <NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white font-medium'}>Statistics</NavLink>
        </li>
        <li className="text-base">
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white font-medium'}>Dashboard</NavLink>
        </li>
        <li className="text-base">
            <NavLink to="/preOrder" className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-white font-medium'}>Pre Order</NavLink>
        </li>
    </>

    return (
        <div className="pt-8">
            <div className="text-center mx-8 bg-[#9538E2] rounded-[32px]  border-[7px] border-[#F6F6F6] relative">
                <div className="px-7">
                    <div className="navbar pt-8 pb-12 px-0">
                        {/* 1 */}
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    {links}
                                </ul>
                            </div>
                            {/* logo */}
                            <Link className="font-bold text-xl text-white" to="/">Gadget Heaven</Link>
                        </div>
                        {/* 2 */}
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {links}
                            </ul>
                        </div>
                        {/* 3 */}
                        <div className="navbar-end space-x-4">
                            <div className="text-xl text-[#3A3A3A] p-2.5 border border-gray-300 rounded-full bg-white">
                                <PiShoppingCartBold />
                            </div>
                            <div className="text-xl text-[#3A3A3A] p-2.5 border border-gray-300 rounded-full bg-white">
                                <FiHeart />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-5/6 mx-auto">
                    <h2 className="font-bold text-6xl text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                    <p className="text-white font-normal text-base mt-6 md:w-3/5 w-full mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>

                <div className="mt-8 pb-[268px] ">
                    <Link to="/dashboard" className="bg-white text-[#9538E2] py-3.5 px-8 rounded-full font-bold text-xl hover:bg-[#9538E2] hover:text-white border border-white">Shop Now</Link>
                </div>

                <div className="w-[1062px] h-[563px] rounded-[32px] p-6 bg-gray-50/35 border-[3px] border-white absolute top-[70%] left-[15%]">
                    <img className="rounded-3xl object-cover w-full h-full" src={HeroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroHome;