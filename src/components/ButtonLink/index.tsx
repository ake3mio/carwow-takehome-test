import React from 'react';
import './index.scss';

type ButtonProps = {
    children: React.ReactNode,
    external?: boolean,
} & React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const Button = ({children, external, ...rest}: ButtonProps) => {

    const onClick = (e) => {
        if (!external) {
            e.preventDefault();
            window.history.pushState({path: rest.href}, "", rest.href)
        }
    };

    return (
        <a className="ButtonLink" {...rest} onClick={onClick}>
            {children}
        </a>
    );
};

export default Button;
