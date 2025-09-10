import React, {useContext, useEffect, useState} from 'react';
import Dessert from "../sub-components/Dessert.jsx";
import {DessertContext} from "../../contexts/DessertContext.js";

function Main() {
    const [Desserts, setDesserts] = useState([])
    const [dessertState, setDessertState] = useContext(DessertContext)

    useEffect(() => {
        const handleFetch = async () => {
            const res = await fetch("/assets/data/data.json")
            return res.json()
        }
        handleFetch().then(data => setDesserts(data))
    }, []);

    return (
        <main className={"flex-1"}>
            <h1 className={"text-primary-rose-900 text-3xl font-bolder"}>Desserts</h1>
            <div className={"my-8 w-full flex flex-wrap gap-4 max-sm:justify-center"}>
                {
                    Desserts ? (
                        Desserts.map(({image, name, category, price}, index) => (
                            <Dessert
                                key={`${index}-${name}-${Math.random()}`}
                                image={image}
                                name={name}
                                category={category}
                                price={price}
                            />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )
                }
            </div>
        </main>
    );
}

export default Main;