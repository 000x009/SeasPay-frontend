import { useNavigate } from "react-router-dom";
import { Text, Tappable } from "@telegram-apps/telegram-ui";

import "./ProductCard.css";

export function ProductCard({ image, title, ...props }) {
    const navigate = useNavigate()

    return (
        <Tappable className="product-card" {...props}>
            <div className="product-card__image-container">
                <img className="product-card__image" src={image} />
            </div>
            <div className="product-card__title-container">
                <Text className="product-card__title" weight="2">{title}</Text>
            </div>
        </Tappable>
    );
}