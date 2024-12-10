/* eslint-disable react/prop-types */

const HeroStatistics = ({ title, subTitle }) => {
    return (
        <div className="text-center py-8 bg-[#9538E2]">
            <h2 className="font-bold text-3xl text-white">{title}</h2>
            <p className="text-white mt-4 w-5/6 md:w-4/5 lg:w-3/5 mx-auto">{subTitle}</p>
        </div>
    );
};

export default HeroStatistics;