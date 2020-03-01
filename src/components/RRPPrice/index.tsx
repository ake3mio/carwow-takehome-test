import React from 'react';
import {convertToPrice} from "../../core/price";
import './index.scss';

export type RRPPriceProps = {
    rrp: number,
};

const RRPPrice = ({rrp}: RRPPriceProps) => {
    return (
        <h4 className="RRPPrice">
           RRP from {convertToPrice(rrp)}
        </h4>
    );
};

export default RRPPrice;
