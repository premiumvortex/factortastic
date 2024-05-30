import React from 'react';
import '../../../../index.css';

export const HomePageTitle = () => {
    return (
        <h1 className="page-title" style={{textTransform: 'uppercase'}}>
            <span style={{color: 'var(--cyan)'}}>factor</span>
            <span style={{color: 'var(--pink)'}}>tastic!</span>
        </h1>
    );
}