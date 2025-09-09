import React from 'react';

// Images Import
import dessertImage from "/assets/images/image-brownie-desktop.jpg"

function OrderItem() {
    const name = "Classic Tiramisu"
    const count = 1
    const price = 5.50

    return (
        <div className={"w-full py-4 flex justify-between items-center gap-x-4 border-b border-b-primary-rose-300"}>
            <div className={"flex gap-x-2"}>
                <img className={"w-[50px] h-[50px] rounded-md"} src={dessertImage} alt={"Dessert image"}/>
                <div className={"flex flex-col gap-y-1"}>
                    <strong className={"text-primary-rose-900 font-regular"}>{name}</strong>
                    <div className={"flex gap-x-4"}>
                        <span className={"text-primary-red font-regular ml-2"}>{count}x</span>
                        <span className={"text-primary-rose-400 font-lighter"}>@ ${price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <span className={"text-primary-rose-900 font-regular"}>${(count * price).toFixed(2)}</span>
        </div>
    );
}

export default OrderItem;