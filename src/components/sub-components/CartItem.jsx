import React from 'react';

function CartItem({name, count, price}) {

    return (
        <div className={"w-full py-4 flex justify-between items-center gap-x-4 border-b border-b-primary-rose-300"}>
            <div className={"flex flex-col gap-y-1"}>
                <strong className={"text-primary-rose-900 font-regular"}>{name}</strong>
                <div className={"flex gap-x-4"}>
                    <span className={"text-primary-red font-regular ml-2"}>{count}x</span>
                    <span className={"text-primary-rose-400 font-lighter"}>@ ${price.toFixed(2)}</span>
                    <span className={"text-primary-rose-500 font-regular"}>${(count * price).toFixed(2)}</span>
                </div>
            </div>
            <span className={"btn-cross-hover border border-primary-rose-500 rounded-full w-6 h-6 inline-grid place-items-center"}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path className={"fill-primary-rose-500"} d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg></span>
        </div>
    );
}

export default CartItem;