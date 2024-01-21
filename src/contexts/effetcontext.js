import React, { createContext, useContext, useState } from 'react';

const EffetContext = createContext();

export const EffetProvider = ({ children }) => {
    const [effetStyles, setEffetStyles] = useState({});

    const applyEffet = (type, styles) => {
        setEffetStyles((prevStyles) => ({
            ...prevStyles,
            [type]: styles,
        }));
    };

    return (
        <EffetContext.Provider value={{ effetStyles, applyEffet }}>
            {children}
        </EffetContext.Provider>
    );
};



export const useEffet = () => {
    const context = useContext(EffetContext);
    if (!context) {
        throw new Error('useEffet must be used within an EffetProvider');
    }
    return context;
};
