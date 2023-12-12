
const Title = ({title, subTitle}) => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-semibold border-b-4 border-[#f71735] w-fit mx-auto">{title}</h1>
            <h1 className="text-2xl ">{subTitle}</h1>
        </div>
    );
};

export default Title;