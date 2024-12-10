
const Footer = () => {
    return (
        <section className="w-11/12 mx-auto my-24">
            <footer className="text-center">
                <h2 className="font-bold text-3xl text-[#09080F]">Gadget Heaven</h2>
                <p className="font-medium text-gray-600 mt-3">Leading the way in cutting-edge technology and innovation.</p>

                <div className="border-gray-200 border-b pt-8 w-full"></div>

                <div className="pt-8 flex justify-evenly flex-col md:flex-row gap-8 md:gap-0">
                    <nav className="flex flex-col space-y-2">
                        <h6 className="mb-2 font-bold text-lg text-[#09080F]">Services</h6>
                        <a className="link link-hover text-gray-600">Product Support</a>
                        <a className="link link-hover text-gray-600">Order Tracking</a>
                        <a className="link link-hover text-gray-600">Shipping & Delivery</a>
                        <a className="link link-hover text-gray-600">Returns</a>
                    </nav>
                    <nav className="flex flex-col space-y-2">
                        <h6 className="mb-2 font-bold text-lg text-[#09080F]">Company</h6>
                        <a className="link link-hover text-gray-600">About Us</a>
                        <a className="link link-hover text-gray-600">Careers</a>
                        <a className="link link-hover text-gray-600">Contact</a>
                    </nav>
                    <nav className="flex flex-col space-y-2">
                        <h6 className="mb-2 font-bold text-lg text-[#09080F]">Legal</h6>
                        <a className="link link-hover text-gray-600">Cookie Policy</a>
                        <a className="link link-hover text-gray-600">Privacy Policy</a>
                        <a className="link link-hover text-gray-600">Terms of Service</a>
                    </nav>
                </div>
            </footer>
        </section>
    );
};

export default Footer;