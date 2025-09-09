import React from 'react';
import AddToCartButton from "./AddToCartButton.jsx";
import HandlerPurchaseButton from "./HandlerPurchaseButton.jsx";

// Image Import
import dessertImage from "/assets/images/image-brownie-desktop.jpg"

function Dessert() {

    const buttonState = false
    const name = "Salted Caramel Brownie"
    const price = 5.5
    const category = "Brownie"

    return (
        <div className={"max-w-[275px] pb-4"}>
            <div className={"relative"}>
                <img className={"w-[275px] rounded-xl"} src={dessertImage} alt={"Dessert picture"}/>
                {buttonState ? <AddToCartButton /> : <HandlerPurchaseButton />}
            </div>
            <div className={"flex flex-col mt-12"}>
                <span className={"text-primary-rose-500 font-lighter"}>{category}</span>
                <strong className={"text-primary-rose-900 text-xl font-regular"}>{name}</strong>
                <em className={"text-primary-red not-italic font-regular"}>${price.toFixed(2)}</em>
            </div>
        </div>
    );
}

export default Dessert;