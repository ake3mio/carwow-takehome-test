import React from 'react';
import './index.scss';

type ProductPhotoProps = {
    img_url: string,
    make: string,
    model: string,
}

const ProductPhoto = ({img_url, make, model}: ProductPhotoProps) => {
    return (
        <div className="ProductPhoto">
            <div className="ProductPhoto__image-container">
                {img_url && <img src={img_url} alt={`${make} ${model}`} className="ProductPhoto__image"/>}
                <div className="ProductPhoto__image-shadow"/>
            </div>
        </div>
    );
};

export default ProductPhoto;
