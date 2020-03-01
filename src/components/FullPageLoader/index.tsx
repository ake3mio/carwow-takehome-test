import React, {useState} from 'react';
import classNames from 'classnames';
import './index.scss';
import {createArray} from "../../core/utils/array";

type FullPageLoaderProps = {
    active: boolean
}

const dots = createArray(10, (_, index) => {

    return (
        <span key={index} className="FullPageLoader__dot">.</span>
    )
});

const FullPageLoader = ({active}: FullPageLoaderProps) => {

    const classes = classNames('FullPageLoader', {
        "FullPageLoader--active": active
    });

    const [loadComplete, setLoadComplete] = useState(false);

    const onAnimationEnd = (event) => {

        event.persist();

        const target = event.target as HTMLElement;
        if (loadComplete) {
            setTimeout(() => {
                target.style.display = "none"
            }, 100)
        } else {
            setLoadComplete(true);
        }
    };

    return (
        <div className={classes} onAnimationEnd={onAnimationEnd}>
            <div className="FullPageLoader__text">
                {dots}
            </div>
        </div>
    );
};

export default FullPageLoader;
