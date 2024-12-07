import { Text, Tappable } from "@telegram-apps/telegram-ui";

import { parsePrice } from "@/scripts/helpers/parsePrice";

import "./ProductCard.css";

export function ProductCard({ product, ...props }) {
    return (
        <Tappable className="product-card" {...props}>
            <div className="product-card__image-container">
                <img className="product-card__image" src={product.image_url} />
            </div>
            <div className="product-card__title-container">
                <Text className="product-card__title" weight="2">{product.name}</Text>
            </div>
            <div className="product-card__price-container">
                <Text className="product-card__price" weight="3">{parsePrice(product.price)}$</Text>
            </div>
        </Tappable>
    );
}