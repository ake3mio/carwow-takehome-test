import React from 'react';
import classnames from 'classnames';
import './index.scss';

export type CardProps = {
    children?: React.ReactNode,
    className?: string,
}

const Card = ({children, className}: CardProps) => {

    const classes = classnames("Card", className);

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Card;
