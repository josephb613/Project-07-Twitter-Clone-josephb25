
import "./contexts/styles/btnHoverContext.css"

import react, { createContext, useContext, useState } from 'react';

// créer un contexte pour stocker l'état du bouton
const boutoncontexte = createContext();

// un composant fournisseur (provider) pour le contexte
const boutonprovider = ({ children }) => {
    const [hovered, sethovered] = useState(false);

    const togglehover = () => {
        sethovered(!hovered);
    };

    const contextvalue = {
        hovered,
        togglehover,
    };

    return (
        <boutoncontexte.provider value={contextvalue}>
            {children}
        </boutoncontexte.provider>
    );
};



