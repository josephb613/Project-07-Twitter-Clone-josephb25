// HoverButton.jsx
import React from 'react';
import { useHoverContext } from './HoverContext';

const HoverButton = ({ children }) => {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverContext();

    return (
        <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                background: isHovered ? '#3498db' : '#2980b9',
                color: '#ffffff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
        >
            {children}
        </button>
    );
};

export default HoverButton;
