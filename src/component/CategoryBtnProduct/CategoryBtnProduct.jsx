/* eslint-disable react/prop-types */
import ProductsCard from "../ProductsCard/ProductsCard";

const CategoryBtnProduct = ({ isActive, allProducts }) => {
    return (
        <div>
            {isActive === "allProduct" && (
                <div className="grid grid-cols-3 gap-6">
                    {
                        allProducts.slice(5, 11).map(product => <ProductsCard key={product.product_id} product={product} />)
                    }
                </div>
            )}
            {isActive === "computers" && (
                <div className="grid grid-cols-3 gap-6">
                    {
                        allProducts.filter(product => product.category === "Computers").length === 0 ? (<p>0</p>) : (allProducts.filter(product => product.category === "Computers").map(product => <ProductsCard key={product.product_id} product={product} />))
                    }
                </div>
            )}
            {isActive === "phones" && (
                <div className="grid grid-cols-3 gap-6">
                    {
                        allProducts.filter(product => product.category === "Phones").length === 0 ? (<p>0</p>) : (allProducts.filter(product => product.category === "Phones").map(product => <ProductsCard key={product.product_id} product={product} />))
                    }
                </div>
            )}
            {isActive === "smartWatches" && (
                <div className="grid grid-cols-3 gap-6">
                    {
                        allProducts.filter(product => product.category === "Smart Watches").length === 0 ? (<p>0</p>) : (allProducts.filter(product => product.category === "Smart Watches").map(product => <ProductsCard key={product.product_id} product={product} />))
                    }
                </div>
            )}
            {isActive === "chargers" && (
                <div className="grid grid-cols-3 gap-6">
                    {
                        allProducts.filter(product => product.category === "Chargers").length === 0 ? (<p>0</p>) : (allProducts.filter(product => product.category === "Chargers").map(product => <ProductsCard key={product.product_id} product={product} />))
                    }
                </div>
            )}
            {isActive === "powerBanks" && (
                <div className="grid grid-cols-3 gap-6">
                    {
                        allProducts.filter(product => product.category === "Power Banks").length === 0 ? (<p>0</p>) : (allProducts.filter(product => product.category === "Power Banks").map(product => <ProductsCard key={product.product_id} product={product} />))
                    }
                </div>
            )}

        </div>
    );
};

export default CategoryBtnProduct;