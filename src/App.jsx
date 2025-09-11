import React, {useState} from 'react';
import Main from "./components/main-components/Main.jsx";
import Cart from "./components/main-components/Cart.jsx";
// import Order from "./components/main-components/Order.jsx";

import {DessertContext} from "./contexts/DessertContext.js"

function App() {
    const [dessertState, setDessertState] = useState(null)
    const [counterList, setCounterList] = useState({})
    const [id, setId] = useState()

    return (
        <><DessertContext.Provider value={[dessertState, setDessertState, counterList, setCounterList, id, setId]}>
            <Main />
            <Cart />

            {/*<Order />*/}
        </DessertContext.Provider></>
    );
}

export default App;