import Image from "next/image";
import React from "react";
import Dash from "../components/Dash";
import image1 from '../images/grid__1.png'
import image2 from '../images/grid__2.png'
import image3 from '../images/grid__3.png'

const Featured = () => {
    return (
        <div className="container pt-40">
            <div className="text-center ">
                <h2 className="text-6xl font-bold">Our</h2>
                <h2 className="text-6xl font-bold pt-2">
                    Featured <span className="text-accent">Food</span>
                </h2>

                <p className="max-w-full pt-10 text-gray-700 ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat
                    repellat expedita tempore hic iste. Laborum odit illo ex nostrum! Lorem
                    ipsum dolor sit amet.
                </p>
                <div className="w-fit mx-auto">
                    <Dash />
                </div>
            </div>



            <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10 px-[100px]">
                <div className="w-fit mx-auto self-end">
                    <Image
                        className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                        src={image1}
                        width={300}
                        height={600}
                        alt="grid image"
                    />

                    <div className="space-y-4">
                        <Dash />
                        <h2 className="font-medium text-xl">Shrimp Salad</h2>
                        <p className="text-gray-700 text-[14px] xl:text-[16px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos, nesciunt distinctio.
                        </p>
                    </div>
                </div>
                <div className="w-fit mx-auto">
                    <Image
                        className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                        src={image2}

                        width={500}
                        height={900}
                        alt="grid image"
                    />

                    <div className="space-y-4">
                        <Dash />
                        <h2 className="font-medium text-xl">Baked apples</h2>
                        <p className="text-gray-700 text-[14px] xl:text-[16px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos, nesciunt distinctio.
                        </p>
                    </div>
                </div>
                <div className="w-fit mx-auto self-end">
                    <Image
                        className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                        src={image3}
                        width={300}
                        height={600}
                        alt="grid image"
                    />

                    <div className="space-y-4">
                        <Dash />
                        <h2 className="font-medium text-xl">Cherries chicken</h2>
                        <p className="text-gray-700 text-[14px] xl:text-[16px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dignissimos, nesciunt distinctio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;