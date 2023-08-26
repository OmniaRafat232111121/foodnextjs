import React from "react";

const Hero = () => {
    return (
        <div className="relative min-h-screen">
            <div className="container h-screen flex items-center justify-center ">
                <div className="space-y-4 bg-[#ffffff98] w-fit p-4 animate-fade-in">
                    <p className="uppercase font-medium">Wide options of choice</p>
                    <h2 className="text-4xl sm:text-6xl font-bold">
                        Delicious <span className="text-accent">Food</span>
                    </h2>
                    <p className="text-gray-700 text-[14px] sm:text-[16px]">
                        Delicious food color, aroma and taste.
                        <br /> What are you waiting for?
                    </p>

                    <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
                        View More
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Hero;
