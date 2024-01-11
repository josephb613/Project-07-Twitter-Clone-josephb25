import React from 'react';

export default function Layout({children}) {
    return (
        <>
            <div className="left-sidebar"/>
            
            {children}

            <div className="right-sidebar" />
        </>
    );
}

