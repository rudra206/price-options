import PriceOption from "../components/PriceOption/PriceOption";


const PriceOptions = () => {

    const options = [
        {
            "id": 1,
            "name": "Basic Monthly",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 free fitness assessment"
            ]
        },
        {
            "id": 2,
            "name": "Standard Monthly",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Unlimited group classes",
                "Locker room & shower access",
                "Free WiFi"
            ]
        },
        {
            "id": 3,
            "name": "Premium Monthly",
            "price": 69.99,
            "features": [
                "Access to gym equipment",
                "Unlimited group classes",
                "Sauna & steam room access",
                "Free guest pass (2 per month)",
                "Priority class booking"
            ]
        },
        {
            "id": 4,
            "name": "Annual Membership",
            "price": 499.99,
            "features": [
                "Access to all gym facilities",
                "Unlimited group classes",
                "Free body composition test (quarterly)",
                "Discounted personal training",
                "1 free gym bag"
            ]
        },
        {
            "id": 5,
            "name": "Personal Training Package (5 sessions)",
            "price": 199.99,
            "features": [
                "5 one-on-one training sessions",
                "Customized workout plan",
                "Nutritional guidance",
                "Progress tracking"
            ]
        }
    ]


    return (
        <div className="m-10">
            <h2 className="text-5xl">Best Prices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 ">
                {
                    options.map((option, index) => <PriceOption
                     option={option} key={index}> </PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;