import React, {useEffect, useRef, useState} from 'react';
import './index.scss';

type CircleRatingProps = {
    rating: number,
    dimensions?: number,
};

const CircleRating = ({rating = 0, dimensions = 100}: CircleRatingProps) => {

    const strokeDasharray = dimensions * 2.55;
    const [value, setValue] = useState(strokeDasharray);
    const circleRef = useRef<SVGCircleElement>(null);

    useEffect(() => {

        if (circleRef.current) {

            const radius = parseInt(circleRef.current.getAttribute('r') as string, 10);
            const circumference = Math.PI * (radius * 2);
            const clampedRating = Math.min(Math.max(0, rating), 10);

            const newValue = ((100 - clampedRating * 10) / 100) * circumference;

            setTimeout(() => {
                setValue(newValue);
            }, 10)
        }
    }, [rating]);


    const circleDimensions = dimensions / 2;
    const radius = circleDimensions - 10;

    return (
        <svg id="svg" width={dimensions} height={dimensions} className="CircleRating">

            <circle
                r={radius}
                cx={circleDimensions}
                cy={circleDimensions}
                fill="transparent"
                strokeDasharray={strokeDasharray}
                strokeDashoffset="0"
                className="CircleRating__background-circle"
            />

            <foreignObject width={dimensions} height={dimensions}>
                <div className="CircleRating__text">
                    <span className="CircleRating__rating">{rating}</span> / 10
                </div>
            </foreignObject>

            <circle
                ref={circleRef}
                r={radius}
                cx={circleDimensions}
                cy={circleDimensions}
                fill="transparent"
                strokeDasharray={strokeDasharray}
                strokeDashoffset="0"
                style={{strokeDashoffset: `${value}px`}}
                className="CircleRating__foreground-circle"
            />
        </svg>
    );
};

export default CircleRating;
