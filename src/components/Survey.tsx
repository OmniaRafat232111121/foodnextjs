import React, { useState } from "react";

const FoodSurvey = () => {
    const [favoriteFood, setFavoriteFood] = useState("");
    const [spicyPreference, setSpicyPreference] = useState("");
    const [dietaryRestriction, setDietaryRestriction] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // You can handle the form submission logic here
        console.log("Survey data:", {
            favoriteFood,
            spicyPreference,
            dietaryRestriction,
        });
    };

    return (
        <div className="container mx-auto mt-10 p-10 flex flex-col items-center justify-center bg-gray-300 rounded-full">
            <h2 className="text-2xl font-semibold mb-4">Food Preference Survey</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Whats your favorite type of food?</label>
                    <label className="block">
                        <input
                            type="radio"
                            value="Italian"
                            checked={favoriteFood === "Italian"}
                            onChange={(e) => setFavoriteFood(e.target.value)}
                        />{" "}
                        Italian
                    </label>
                    <label className="block">
                        <input
                            type="radio"
                            value="Henidi"
                            checked={favoriteFood === "Henidi"}
                            onChange={(e) => setFavoriteFood(e.target.value)}
                        />{" "}
                        Henidi
                    </label>
                </div>
                <div>
                    <label className="block font-medium">Do you like spicy food?</label>
                    <label className="block">
                        <input
                            type="radio"
                            value="Yes"
                            checked={spicyPreference === "Yes"}
                            onChange={(e) => setSpicyPreference(e.target.value)}
                        />{" "}
                        Yes
                    </label>

                    <label className="block">
                        <input
                            type="radio"
                            value="No"
                            checked={spicyPreference === "No"}
                            onChange={(e) => setSpicyPreference(e.target.value)}
                        />{" "}
                        No
                    </label>
                </div>
                <div>
                    <label className="block font-medium">Do you have any dietary restrictions?</label>
                    <label className="block">
                        <input
                            type="radio"
                            value="Dessert"
                            checked={dietaryRestriction === "Vegetarian"}
                            onChange={(e) => setDietaryRestriction(e.target.value)}
                        />{" "}
                        Vegetarian




                    </label>
                    <label className="block">
                        <input
                            type="radio"
                            value="Dessert"
                            checked={dietaryRestriction === "Dessert"}
                            onChange={(e) => setDietaryRestriction(e.target.value)}
                        />{" "}
                        Dessert




                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-dark"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FoodSurvey;
