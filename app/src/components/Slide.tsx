import React from 'react';

const Section = ({children}) => {
    return (
        <div className="w-full h-screen snap-start">
            {children}
        </div>
    );
};

export default Section;