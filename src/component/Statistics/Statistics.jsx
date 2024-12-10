import { Helmet } from "react-helmet-async";
import BodyStatistics from "../BodyStatistics/BodyStatistics";
import HeroStatistics from "../HeroStatistics/HeroStatistics";
import NavBar from "../NavBar/NavBar";

const Statistics = () => {
    return (
        <div>
            <Helmet>
                <title>Statistics</title>
            </Helmet>
            <NavBar />
            <HeroStatistics title={'Statistics'} subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}/>
            <BodyStatistics />
        </div>
    );
};

export default Statistics;