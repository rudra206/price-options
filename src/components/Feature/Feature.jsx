import { FaRegCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        
        <div className="flex items-center gap-2 ">
            <FaRegCheckCircle className="text-green-800"></FaRegCheckCircle>
            <p>{feature}</p>
        </div>
    );
};

export default Feature;