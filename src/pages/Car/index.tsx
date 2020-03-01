import React, {useEffect} from 'react';
import {withProduct, withProductPromotions, WithProductPromotionsProps, WithProductProps} from '../../core/products';
import './index.scss';
import {WithRouteParams} from "../../core/router";
import Select from "../../components/Select";
import ButtonLink from "../../components/ButtonLink";
import RRPPrice from "../../components/RRPPrice";
import CircleRating from "../../components/CircleRating";
import ProductPhoto from '../../components/ProductPhoto';
import FullPageLoader from '../../components/FullPageLoader';
import {withDocumentTitle} from "../../core/utils/document-title";
import BreadcrumbBar, {Breadcrumb} from "../../components/BreadcrumbBar";
import PromotionCardList from "../../components/PromotionCardList";

type CarProps = WithRouteParams;

const colorsToSelectOptions = (colors: string[]) => colors.map((color, index) => ({
    name: `Colour ${index + 1}`,
    value: color
}));

const carColorRenderer = option => {
    return (
        <div className="Car__color-option">
            <span className="Car__color" style={{background: option.value}}/>
        </div>
    );
};

type InternalProps =
    & WithProductProps
    & WithProductPromotionsProps
    & CarProps;

const Car = ({product: {loading, result}, productPromotions}: InternalProps) => {

    useEffect(() => {

        if (result) {
            document.title = `${result.make} ${result.model} Review | carwow`
        }
    }, [result]);

    const breadcrumbs: Breadcrumb[] = result ? [
        {
            href: "/",
            name: "Home",
        },
        {
            name: `${result.make} ${result.model}`,
        },

    ] : [];

    return (
        <div className="Car page">

            <FullPageLoader active={!loading}/>

            {
                !loading && (
                    <>
                        <div className="container Car__main-container">

                            <BreadcrumbBar breadcrumbs={breadcrumbs}/>

                            <ProductPhoto
                                img_url={result.img_url}
                                make={result.make}
                                model={result.model}
                            />

                            <div className="Car__info">

                                <h1>{result.make} {result.model}</h1>

                                <div className="Car__price">
                                    <RRPPrice rrp={result.rrp}/>
                                </div>

                                <p>
                                    {result.summary}
                                </p>

                                <div className="Car__content">

                                    <div className="Car__content-section">

                                        <div className="Car__recommended-engine Car__content-section">
                                            <h4 className="Car__content-title">Recommended Engine</h4>
                                            {result.recommended_engine}
                                        </div>

                                        <hr/>

                                        <div className="Car__content-section">

                                            <h4 className="Car__content-title">Available colours</h4>

                                            <Select
                                                placeholder="Select colour"
                                                options={colorsToSelectOptions(result.available_colors)}
                                                valueRenderer={carColorRenderer}
                                            />

                                        </div>
                                    </div>

                                    <div className="Car__rating Car__content-section">
                                        <h4 className="Car__content-title">Carwow rating</h4>
                                        <CircleRating rating={result.carwow_rating}/>
                                    </div>

                                </div>


                                <ButtonLink href="https://www.carwow.co.uk/" target="_blank" external={true}>
                                    Get Offers
                                </ButtonLink>

                            </div>
                        </div>

                        <hr/>

                        <PromotionCardList
                            results={productPromotions.results}
                            loading={productPromotions.loading}
                            title="Other Deals"
                            externalLink={true}
                        />
                    </>
                )
            }
        </div>
    );
};
const getTitle = ({product: {result}}: WithProductProps) => result && `${result.make} ${result.model} Review | carwow`;

const enhancers = [
    withDocumentTitle<WithProductProps, CarProps>(getTitle),
    withProductPromotions,
    withProduct<CarProps>(x => x.router.params.id),
];

export default enhancers.reduce((component: any, enhancer) => enhancer(component), Car);
