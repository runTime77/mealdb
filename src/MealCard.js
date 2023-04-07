import React, { useState } from 'react';

const MealCard = ({ meal }) => {
    console.log(meal);
    const [isExpended, setIsExpended] = useState(false);


    const { strMealThumb, strMeal, strInstructions, strCategory, strArea } = meal;

    const changeExpended = () => {
        setIsExpended(!isExpended);
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="h-[300px]"><img className="w-full" src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between item-center">
                    <div>
                        <h2 className="card-title">{strMeal}</h2>
                        Catagory <div className="badge badge-primary"> :{strCategory}</div>
                    </div>
                    Origin <div className="badge badge-outline"> :{strArea}</div>
                </div>
                {isExpended ? (
                    <>
                        {strInstructions}{" "}
                        <span
                            onClick={changeExpended}
                            className="text-gray-500 font-bold cursor-pointer"
                        >
                            Show Less
                        </span>
                    </>
                ) : (
                    <>{strInstructions.slice(0, 100)}...{" "}
                        <span onClick={changeExpended} className="text-grey-5000 font-bold cursor-pointer">Read More
                        </span>{" "}</>
                )}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default MealCard;