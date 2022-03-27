import React from "react";
import RecipeConfirmation from "../components/RecipeCalculator/RecipeConfirmation";
import Footer2 from "../components/Footer/Footer2";
import '../App.css'


function RecipeConfirm() {
    return (
        <div className="OnBoarding">
        <RecipeConfirmation />
        <Footer2 />
        </div>
    );
}

export default RecipeConfirm;