import React from "react";
import Dash from "./Dash";
import ServicesCard from "./ServicesCard";
import service1 from '../images/services__1.png'
import service2 from '../images/services__2.png'
import service3 from '../images/services__3.png'
import service4 from '../images/services__4.png'

const servicesData = [
    {
        image: service1,
        title: "Professonal Kitchen",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
    {
        image: service2,
        title: "Delivery",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
    {
        image: service3,
        title: "Wine List",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
    {
        image: service4,
        title: "Free Wifi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio.",
    },
];

const Services = () => {
    return (
        <div className="container pt-40 px-[100px] ">
            <div className="space-y-4 w-fit mx-auto text-center ">
                <h2 className="text-4xl md:text-6xl font-bold">
                    Choose Best <span className="text-accent">Service</span>
                </h2>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
                    <br />
                    quidem esse eum animi?
                </p>
                <div className="w-fit mx-auto">
                    <Dash />
                </div>
            </div>

            <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
                {servicesData.map((item, index) => (
                    <ServicesCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;