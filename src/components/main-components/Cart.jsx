import React from 'react';

// Images Import
import emptyCart from "../../assets/images/illustration-empty-cart.svg"

function Cart() {
    const count= 0

    return (
        <aside className={"max-mobile:self-center xl:flex-1 bg-white rounded-lg max-w-[400px] w-full min-h-[280px] h-fit p-8"}>
            <h2 className={"text-primary-red text-xl font-bolder"}>Your cart ({count})</h2>
            <div className={"w-full mt-10 inline-grid place-items-center gap-y-6"}>
                <img src={emptyCart} alt={"Cake : empty cart"}/>
                <p className={"text-primary-rose-400 font-regular text-center"}>Your added items will appear here</p>
            </div>
        </aside>
    );
}

export default Cart;