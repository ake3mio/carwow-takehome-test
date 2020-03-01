import React from 'react';
import './index.scss';

export type Breadcrumb = {
    name: string,
    href?: string,
}

type BreadcrumbBarProps = {
    breadcrumbs: Breadcrumb[]
}

const BreadcrumbBar = ({breadcrumbs}: BreadcrumbBarProps) => {
    return (
        <div className="BreadcrumbBar">
            <div className="container">
                <ul className="BreadcrumbBar__list">
                    {breadcrumbs.map((breadcrumb, index)=>(
                        <li className="BreadcrumbBar__crumb" key={index}>
                            <a href={breadcrumb.href}>{breadcrumb.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BreadcrumbBar;
