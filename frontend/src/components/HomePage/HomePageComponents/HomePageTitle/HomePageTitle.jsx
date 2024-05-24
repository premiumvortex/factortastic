import React from 'react';

import '../../../../index.css';

export const HomePageTitle = () => {
    return (
        <h1 className="home-page-title" style={{textTransform: 'uppercase'}}>
            <span className="page-title" style={{color: 'var(--cyan)'}}>factor</span>
            <span className="page-title" style={{color: 'var(--pink)'}}>tastic!</span>
        </h1>
    );
}


