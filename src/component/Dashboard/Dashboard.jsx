import { useLoaderData, useNavigate } from "react-router-dom";
import HeroDashboard from "../HeroDashboard/HeroDashboard";
import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import { getStoredProductList, getStoredWishlistList, removeAllProducts, removeProductLists, removeWishLists } from "../../utility/utility";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Dashboard = () => {
    const allProducts = useLoaderData();

    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(true);
    useEffect(() => {
        const storedProductList = getStoredProductList();
        const productsList = allProducts.filter(product => storedProductList.includes(product.product_id));
        setProducts(productsList)
    }, [allProducts, reload]);

    const handleRemoveProductLists = (id) => {
        removeProductLists(id);

        const storedProductList = getStoredProductList();
        const productsList = allProducts.filter(product => storedProductList.includes(product.product_id));
        setProducts(productsList)
        toast.success("Success!")
    }
    const [wishLists, setWishLists] = useState([]);
    useEffect(() => {
        const storedWishLists = getStoredWishlistList();
        const productsList = allProducts.filter(product => storedWishLists.includes(product.product_id));
        setWishLists(productsList)
    }, [allProducts]);

    const handleremoveWishLists = (id) => {
        removeWishLists(id);

        const storedWishLists = getStoredWishlistList();
        const productsList = allProducts.filter(product => storedWishLists.includes(product.product_id));
        setWishLists(productsList)
        toast.success("Success!")
    }

    const handleSort = () => {
        const sortProduct = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortProduct);
    }
    
    const calculateTotalPrice = () => {
        const total = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        return total.toFixed(2)
    }
    const navigate = useNavigate()

    const handleClear = () => {
        setProducts([]);
        removeAllProducts();
        navigate("/")
    }

    return (
        <div>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <NavBar />
            <HeroDashboard products={products} wishLists={wishLists} handleremoveWishLists={handleremoveWishLists} handleRemoveProductLists={handleRemoveProductLists} handleSort={handleSort} calculateTotalPrice={calculateTotalPrice} handleClear={handleClear} reload={reload} setReload={setReload} />
        </div>
    );
};

export default Dashboard;