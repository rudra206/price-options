import Feature from "../Feature/Feature";


const PriceOption = ({ option }) => {
    return (
        <div className="bg-blue-400 rounded-xl p-4 flex flex-col ">
            <h2 className="text-center">
                <span className="text-5xl font-bold">${option.price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl font-serif text-center my-6 ">
                {option.name}</h4>

            <div className="pl-6 flex-grow">
                {
                    option.features.map((feature, idx) =>
                        <Feature feature={feature} kay={idx}></Feature>)
                }
            </div>
            <div className="  text-center ">
                <button className="mt-2 bg-green-600 w-3/5 
                rounded-xl  p-2 text-white hover:bg-green-800">
                    Buy now</button>
            </div>
        </div>
    );
};

export default PriceOption;