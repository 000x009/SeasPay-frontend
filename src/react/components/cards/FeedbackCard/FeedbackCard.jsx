import { Caption, Tappable } from "@telegram-apps/telegram-ui";
import { Rating } from "@mui/material";

import { formatDate } from "@/scripts/helpers/formatDate";
import { FeedbackSkeleton } from "../FeedbackSkeleton/FeedbackSkeleton";

import "./FeedbackCard.css";

export function FeedbackCard({feedback, loading}) {
    return (
        <Tappable className="feedback_card__container">
            {loading ? <FeedbackSkeleton /> : (
                <>
                    <div className="feedback_card__header">
                        <div className="feedback_card__rating">
                            <Rating value={feedback.stars} readOnly size="large"/>
                        </div>
                        <div className="feedback_card__info">
                            <Caption weight="3" level="3" className="feedback_card__date">
                                {formatDate(feedback.created_at)}
                            </Caption>
                        </div>
                    </div>
                    <div className="feedback_card_text__container">
                        <Caption weight="3" level="3">{feedback.comment.length > 95 ? feedback.comment.slice(0, 69) + '...' : feedback.comment}</Caption>
                    </div>
                </>
            )}
        </Tappable>
    );
}