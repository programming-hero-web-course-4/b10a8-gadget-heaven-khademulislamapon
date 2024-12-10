import { Helmet } from "react-helmet-async";
import BodyPreOrder from "../BodyPreOrder/BodyPreOrder";
import HeroStatistics from "../HeroStatistics/HeroStatistics";
import NavBar from "../NavBar/NavBar";

const PreOrder = () => {
    return (
        <div><Helmet>
            <title>Pre Order</title>
        </Helmet>
            <NavBar />
            <HeroStatistics title={'Looking For Something Different ??'} subTitle={'Put Your Information in The Box...'} />
            <BodyPreOrder />
        </div>
    );
};

export default PreOrder;