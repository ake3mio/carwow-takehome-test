import React from 'react';
import PromotionCard from "../PromotionCard";
import {createArray} from "../../core/utils/array";
import './index.scss';

type PromotionCardListProps = {
    results: carwow.ProductPromotion[]
    loading: boolean,
    title?: string,
    externalLink?: boolean,
}

const fallbackArray = createArray(4);

const PromotionCardList = ({results, loading, title, externalLink}: PromotionCardListProps) => {
    const promotions = loading ? fallbackArray : results;
    return (
        <div className="PromotionCardList">
            {title && (
                <h2 className="PromotionCardList__title">Other Deals</h2>
            )}
            <div className="container">
                {promotions.map((promotion, index) => (
                    <PromotionCard
                        key={index}
                        {...promotion}
                        loading={loading}
                        externalLink={externalLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default PromotionCardList;
