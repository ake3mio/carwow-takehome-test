import React from 'react';
import {WithProductPromotionsProps, withProductPromotions} from '../../core/products';
import PromotionCardList from '../../components/PromotionCardList';
import './index.scss';

const Home = ({productPromotions: {results, loading}}: WithProductPromotionsProps) => {

    return (
        <div className="Home page">
            <PromotionCardList
                results={results}
                loading={loading}
            />
        </div>
    );
};

export default withProductPromotions<{}>(Home);
