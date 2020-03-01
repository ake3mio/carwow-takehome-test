import React from 'react';
import Card, {CardProps} from '../Card';
import classnames from 'classnames';
import CarModelBrand from '../CarModelBrand';
import RRPPrice from '../RRPPrice';
import ButtonLink from '../ButtonLink';
import './index.scss';
import ProductPhoto from "../ProductPhoto";

type PromotionCardProps = {externalLink?: boolean} & CardProps & carwow.ProductPromotion & carwow.Loadable;

const PromotionCard = (props: PromotionCardProps) => {

    const {
        img_url,
        className,
        make,
        model,
        rrp,
        summary,
        id,
        loading,
        externalLink
    } = props;

    const classes = classnames("PromotionCard", className, {
        "PromotionCard--loading": loading
    });

    const href = `/cars/${id}`;
    return (
        <Card className={classes}>
            <a href={href}>
                <ProductPhoto
                    img_url={img_url}
                    make={make}
                    model={model}
                />
            </a>
            <div className="PromotionCard__info">
                <CarModelBrand make={make} model={model}/>
                <p>
                    {summary}
                </p>
            </div>

            <div className="PromotionCard__footer">
                <RRPPrice rrp={rrp}/>
                <ButtonLink href={href} external={externalLink}>Read Review</ButtonLink>
            </div>

        </Card>
    );
};

export default PromotionCard;
