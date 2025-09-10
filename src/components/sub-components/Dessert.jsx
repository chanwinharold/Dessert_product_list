import React, {useState} from 'react';
import AddToCartButton from "./AddToCartButton.jsx";
import HandlerPurchaseButton from "./HandlerPurchaseButton.jsx";

function Dessert({image, name, price, category}) {
    const [buttonState, setButtonState] = useState(true)
    const [counter, setCounter] = useState(1)

    if (counter===0) {setButtonState(true); setCounter(1)}

    return (
        <div className={"max-w-[270px] pb-4"}>
            <div className={"relative"}>
                <picture>
                    <source srcSet={image.desktop} media={"(min-width: 1068px)"} />
                    <source srcSet={image.tablet} media={"(min-width: 768px)"} />
                    <img className={"w-[270px] rounded-xl object-cover"} src={image.mobile} alt={"Dessert picture"}/>
                </picture>
                {buttonState
                    ? <AddToCartButton handlerState={setButtonState} />
                    : <HandlerPurchaseButton values={[counter, setCounter]} />
                }
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