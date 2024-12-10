import { PiShoppingCartBold } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    const links = <>
        <li className="text-base">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#9538E2] font-bold' : 'text-slate-700 font-medium'}>Home</NavLink>
        </li>

        <li className="text-base">
            <NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-[#9538E2] font-bold' : 'text-slate-700 font-medium'}>Statistics</NavLink>
        </li>

        <li className="text-base">
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-[#9538E2] font-bold' : 'text-slate-700 font-medium'}>Dashboard</NavLink>
        </li>
        <li className="text-base">
            <NavLink to="/preOrder" className={({ isActive }) => isActive ? 'text-[#9538E2] font-bold' : 'text-slate-700 font-medium'}>Pre Order</NavLink>
        </li>
    </>
    return (
        <section className="bg-white">
            <div className="w-11/12 mx-auto">
                <div className="navbar py-6 px-0">
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
                        <Link className="font-bold text-xl text-[#0B0B0B]" to="/">Gadget Heaven</Link>
                    </div>
                    {/* 2 */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    {/* 3 */}
                    <div className="navbar-end space-x-4">
                        <div className="text-xl text-[#3A3A3A] p-2.5 border border-gray-300 rounded-full">
                            <PiShoppingCartBold />
                        </div>
                        <div className="text-xl text-[#3A3A3A] p-2.5 border border-gray-300 rounded-full">
                            <FiHeart />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavBar;