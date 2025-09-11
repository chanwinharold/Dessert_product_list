import React from 'react';

function HandlerPurchaseButton({counterState}) {
    const [counter, onIncrement, onDecrement] = counterState

    return (
        <div className={"absolute -bottom-[28px] left-[50%] -translate-x-1/2 z-10 px-4 text-white bg-primary-red w-3/4 h-14 rounded-full inline-flex items-center justify-between gap-x-2 shadow-md active:shadow-none"}>
            <span onClick={onDecrement} className={"btn-quantity-hover border border-white rounded-full w-6 h-6 inline-grid place-items-center"}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg></span>
            <span>{counter}</span>
            <span onClick={onIncrement} className={"btn-quantity-hover border border-white rounded-full w-6 h-6 inline-grid place-items-center"}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg></span>
        </div>
    );
}

export default HandlerPurchaseButton;