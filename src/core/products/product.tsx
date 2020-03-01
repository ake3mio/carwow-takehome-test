import React, {useEffect, useState} from "react";
import {httpGet} from "./utils";

export type WithProductProps = {
    product: {
        loading: boolean,
        result: carwow.Product,
    },
}

export const withProduct = <T extends object>(getProductId = x => x) => (Component: React.ComponentType<T & WithProductProps>) => {
    return (props: T) => {

        const [result, setResult] = useState<carwow.Product | null>(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {

            httpGet<carwow.Product>(`https://warm-dawn-92320.herokuapp.com/model/${getProductId(props)}`)
                .then(data => {
                    setResult(data);
                    setLoading(false);
                });

        }, [props]);

        return (
            <Component
                {...props}
                product={{
                    loading,
                    result: result as carwow.Product
                }}
            />
        )
    }
};


