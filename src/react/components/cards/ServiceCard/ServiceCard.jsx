import { Text, Tappable } from "@telegram-apps/telegram-ui";

import "./ServiceCard.css";

export function ServiceCard({ image, title, ...props }) {
    return (
        <Tappable className="card" {...props}>
            <div className="card__image-container">
                <img className="card__image" src={image} />
            </div>
            <div className="card__title-container">
                <Text className="card__title" weight="2">{title}</Text>
            </div>
        </Tappable>
    );
}