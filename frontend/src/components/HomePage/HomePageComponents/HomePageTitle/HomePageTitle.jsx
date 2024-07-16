import React, { useEffect } from 'react';
import './HomePageTitle.css';

/*
 * HomePageTitle Component: displays home page tite
 * Props: none
 */

export const HomePageTitle = () => {

    // Calculates currect aspect ratio
    const setAspectRatioVariable = ()  => {
        const aspectRatio = window.innerWidth / window.innerHeight;
        document.documentElement.style.setProperty('--aspect-ratio', aspectRatio);
    }

    // Recalculate aspect ratio when screen size changes
    useEffect(() => {
        setAspectRatioVariable();
        window.addEventListener('resize', setAspectRatioVariable);

        return () => window.removeEventListener('resize', setAspectRatioVariable);
    }, []);

    return (
        <h1 className="home-page-title page-title" >
            <span style={{color: 'var(--cyan)'}}>factor</span>
            <span style={{color: 'var(--pink)'}}>tastic!</span>
        </h1>
    );
}