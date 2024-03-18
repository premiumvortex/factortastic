import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData }) => {
    const animationContainer = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current, // the DOM element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData, // the path to the animation json
        });

        return () => anim.destroy(); // Optional: clean up the animation on component unmount
    }, [animationData]); // Re-run the effect if the animation data changes

    return <div ref={animationContainer}></div>;
};

export default LottieAnimation;
