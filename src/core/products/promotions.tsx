import React, {useEffect, useState} from "react";
import {httpGet} from "./utils";

export type WithProductPromotionsProps = {
    productPromotions: {
        loading: boolean,
        results: carwow.ProductPromotion[]
    },
}

export const withProductPromotions = <T extends object>(Component: React.ComponentType<T & WithProductPromotionsProps>) => {
    return (props: T) => {

        const [results, setResults] = useState<carwow.ProductPromotion[]>([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {

            httpGet<carwow.ProductPromotion[]>("https://warm-dawn-92320.herokuapp.com/models")
                .then(data => {
                    setResults(data);
                    setLoading(false);
                });

        }, []);

        return (
            <Component
                {...props}
                productPromotions={{
                    loading,
                    results
                }}
            />
        )
    }
};

