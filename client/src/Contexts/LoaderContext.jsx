import React, { createContext, useState, useContext } from 'react';
export const useLoader = () => useContext(LoaderContext);
const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const showLoader = () => setLoading(true);
    const hideLoader = () => setLoading(false);

    return (
        <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};
