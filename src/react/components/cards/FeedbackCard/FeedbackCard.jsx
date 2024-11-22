import { Caption } from "@telegram-apps/telegram-ui";
import { Rating } from "@mui/material";

import { formatDate } from "@/scripts/helpers/formatDate";
import { Link } from "../../ui/Link/Link";
import {useTelegram} from "@/scripts/hooks/useTelegram";

import "./FeedbackCard.css";

export function FeedbackCard({date, userID, text, rating, itemsLeftCount}) {
    const {WebApp} = useTelegram();

    return (
        <div className="feedback_card__container">
            <div className="feedback_card__header">
                <div className="feedback_card__rating">
                    <Rating value={rating} readOnly size="large"/>
                </div>
                <div className="feedback_card__info">
                    <Caption weight="3" level="3" className="feedback_card__date">
                        {formatDate(date)}
                    </Caption>
                    <Caption weight="3" level="3" className="feedback_card__user" onClick={() => {
                        WebApp.openTelegramLink(`tg://user?id=${userID}`);
                    }}>@username</Caption>
                </div>
            </div>
            <div className="feedback_card_text__container">
                <Caption weight="3" level="3">{text}</Caption>
            </div>
        </div>
    );
}