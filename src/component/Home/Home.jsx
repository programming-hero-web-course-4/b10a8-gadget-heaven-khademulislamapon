import { useLoaderData } from "react-router-dom";
import BodyHome from "../BodyHome/BodyHome";
import HeroHome from "../HeroHome/HeroHome";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const allProducts = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HeroHome />
            <BodyHome allProducts={allProducts} />
        </div>
        
        
    );
};

export default Home;