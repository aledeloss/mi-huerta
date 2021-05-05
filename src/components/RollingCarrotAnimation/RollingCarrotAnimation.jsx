import React from 'react';
import Lottie from 'react-lottie';
import animationCarrot from './carrot-rocket.json';

const RollingCarrotAnimation = ({history}) => {

    const deafultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCarrot 
    };

    function handleonClick() {
        history.push('/start');
    };

    return (
        <div onClick={handleonClick}
        className='carrot-container'>
            <Lottie 
                options= {deafultOptions}
                width={500}
                height={500}
            />
        </div>

    )
};

export default RollingCarrotAnimation;