import React, {useContext, useEffect, useState} from 'react';
import Dessert from "../sub-components/Dessert.jsx";
import {DessertContext} from "../../contexts/DessertContext.js";

function Main() {
    const [Desserts, setDesserts] = useState(null)
    const [btnStateList, setBtnStateList] = useState({})

    const [_, setDessertState, counterList, setCounterList, id, setId] = useContext(DessertContext)

    const handleIncrement = (id) => {
        setCounterList(prevState => ({
            ...prevState,
            [id]: prevState[id] ? prevState[id]+1 : 1
        }))
        setId(id)
    }
    const handleDecrement = (id) => {
        if (counterList[id]===1) {
            setBtnStateList(prevState => ({
                ...prevState,
                [id]: false
            }))
        }

        setCounterList(prevState => ({
            ...prevState,
            [id]: (prevState[id] && prevState[id] > 0) ? prevState[id]-1 : 1
        }))
        setId(id)
    }
    const handleBtnState = (id) => {
        handleIncrement(id)
        setBtnStateList(prevState => ({
            ...prevState,
            [id]: true
        }))
    }

    useEffect(() => {
        const handleFetch = async () => {
            const res = await fetch("/assets/data/data.json")
            return res.json()
        }
        handleFetch()
            .then(data => {
                setDesserts(data)
                setDessertState(data)
            })
    }, []);

    return Desserts ? (
        <main className={"flex-1"}>
            <h1 className={"text-primary-rose-900 text-3xl font-bolder"}>Desserts</h1>
            <div className={"my-8 w-full flex flex-wrap gap-4 max-sm:justify-center"}>
                {
                    Desserts.map(({image, name, category, price}, index) => (
                        <Dessert
                            key={`${index}-${name}-${Math.random()}`}
                            image={image}
                            name={name}
                            category={category}
                            price={price}
                            allState={[btnStateList[index], () => handleBtnState(index), counterList[index], () => handleIncrement(index), () => handleDecrement(index)]}
                        />
                    ))
                }
            </div>
        </main>
    ) : (
        <p className={"w-full text-3xl inline-grid place-items-center"}>Loading...</p>
    );
}

export default Main;