// HoverContext.js
import { createContext, useContext, useState } from 'react';

const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <HoverContext.Provider value={{ isHovered, setIsHovered }}>
            {children}
        </HoverContext.Provider>
    );
};

export const useHover = () => useContext(HoverContext);
