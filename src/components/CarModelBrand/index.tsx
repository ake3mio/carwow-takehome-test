import React from 'react';
import './index.scss';

export type CarModelBrandProps = {
    make: string,
    model: string,
}

const CarModelBrand = ({make, model}: CarModelBrandProps) => {
    return (
        <div className="CarModelBrand">
            <h4 className="CarModelBrand__brand-name">
                {make}
            </h4>
            <h3 className="CarModelBrand__model-name">
                {model}
            </h3>
        </div>
    );
};

export default CarModelBrand;
