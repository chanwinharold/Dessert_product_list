import React from 'react';
import Dessert from "../sub-components/Dessert.jsx";

function Main() {
    return (
        <main className={"flex-1"}>
            <h1 className={"text-primary-rose-900 text-3xl font-bolder"}>Desserts</h1>
            <div className={"border my-8 w-full"}>
                <Dessert />
            </div>
        </main>
    );
}

export default Main;