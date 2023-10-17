import { createContext, useState } from "react";
import React from "react";
export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    
    return (
    <Context.Provider
        value={{
            categories,
            setCategories,
            products,
            setProducts,
        }}>
        {children}
    </Context.Provider>
    );
};

export default AppContext;