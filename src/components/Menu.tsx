

import React, { useState } from "react";
import Dash from "./Dash";
import Image from "next/image";
import MenuCard from "./MenuCard";
import cake from "../images/Ban.jpg";
import pizza from "../images/pizza.jpg";

const menuData = [
    {
        img: cake,
        title: "bancake",
        desc: "2x tuna sahimi, 1x noodles",
        price: "$29.50",
        category: "Dessert",
    },
    {
        img: pizza,
        title: "Italian Pizza",
        desc: "2x tuna sahimi, 1x noodles",
        price: "$29.50",
        category: "Main Course",
    },
    {
        img: pizza,
        title: "Egg omelete",
        desc: "2x tuna sahimi, 1x noodles",
        price: "$20.50",
        category: "Breakfast",
    },
    {
        img: cake,
        title: "bancake",
        desc: "2x tuna sahimi, 1x noodles",
        price: "$29.50",
        category: "Dessert",
    },
    {
        img: pizza,
        title: "Italian Pizza",
        desc: "2x tuna sahimi, 1x noodles",
        price: "$29.50",
        category: "Main Course",
    },
    {
        img: pizza,
        title: "Egg omelete",
        desc: "2x tuna sahimi, 1x noodles",
        price: "$20.50",
        category: "Breakfast",
    },
];

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filter the menu items based on the selected category
    const filteredMenuItems = menuData.filter(
        (item) =>
            selectedCategory === "All" || item.category === selectedCategory
    );

    return (
        <div className="container pt-40">
            <div className="space-y-4 w-fit mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold">
                    Our <span className="text-accent">Menu</span>
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
            {/* Rest of your code */}
            <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto cursor-pointer">
                <li
                    className={`hover:bg-accent hover:text-white p-4 rounded-md ${selectedCategory === "All" ? "bg-accent text-white" : "text-black"
                        }`}
                    onClick={() => setSelectedCategory("All")}
                >
                    All
                </li>
                <li
                    className={`hover:bg-accent hover:text-white p-4 rounded-md ${selectedCategory === "Dessert" ? "bg-accent text-white" : "text-black"
                        }`}
                    onClick={() => setSelectedCategory("Dessert")}
                >
                    Dessert
                </li>
                <li
                    className={`hover:bg-accent hover:text-white p-4 rounded-md ${selectedCategory === "Breakfast" ? "bg-accent text-white" : "text-black"
                        }`}
                    onClick={() => setSelectedCategory("Breakfast")}
                >
                    Breakfast
                </li>

            </ul>
            {/* Rest of your code */}
            <div className=" mt-[40px]  grid w-fit mx-auto sm:grid-cols-2 gap-4">
                {filteredMenuItems.map((item, index) => (
                    <MenuCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Menu;
