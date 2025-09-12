import React, {useContext} from 'react';

// Images Import
import emptyCart from "../../assets/images/illustration-empty-cart.svg"

import CartItem from "../sub-components/CartItem.jsx";
import {DessertContext} from "../../contexts/DessertContext.js";

function Cart() {
    const {dessertState, counterList, setCounterList, setId, setBtnStateList, setBlur} = useContext(DessertContext)

    const handleDelete = (id) => {
        setCounterList(prevState => ({
            ...prevState,
            [id]:0
        }))
        setId(id)
        setBtnStateList(prevState => ({
            ...prevState,
            [id]: false
        }))
    }

    const handleConfirmOrder = () => {
        setBlur(true)
    }

    let total = 0
    let condition = true
    let length = 0
    Object.entries(counterList).forEach(([key, value]) => {
        condition *= value === 0;
        length += value !== 0;
        total += value ? (value * dessertState[key].price) : 0
    })

    return (
        <aside className={"max-mobile:self-center xl:flex-1 bg-white rounded-lg max-w-[400px] w-full min-h-[280px] h-fit p-8"}>
            <h2 className={"text-primary-red mb-4 text-xl font-bolder"}>Your cart ({length})</h2>
            {
                condition ? (
                    <div className={"w-full mt-6 inline-grid place-items-center gap-y-6"}>
                        <img src={emptyCart} alt={"Cake : empty cart"}/>
                        <p className={"text-primary-rose-400 font-regular text-center"}>Your added items will appear here</p>
                    </div>
                ) : (
                    <div>
                        {
                            dessertState.map((dessert, index) => counterList[index] ? (
                                <CartItem
                                    key={`${index}-${dessert.name}-${Math.random()}`}
                                    name={dessert.name}
                                    count={counterList[index]}
                                    price={dessert.price}
                                    onDelete={() => handleDelete(index)}
                                />
                            ):null)
                        }
                        <div className={"flex justify-between items-center gap-x-8 py-6"}>
                            <span className={"text-primary-rose-500 font-lighter"}>Order Total</span>
                            <strong className={"text-primary-rose-900 text-2xl"}>${total.toFixed(2)}</strong>
                        </div>
                        <div className={"flex gap-x-2 justify-center py-4 px-8 rounded-md bg-primary-rose-50"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>
                            <p className={"text-center text-wrap"}>This is a <span className={"font-regular text-primary-rose-900"}>carbon-neutral</span> delivery</p>
                        </div>
                        <button onClick={handleConfirmOrder} className={"btn-order"}>Confirm Order</button>
                    </div>
                )
            }
        </aside>
    );
}

export default Cart;