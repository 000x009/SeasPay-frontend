import { Placeholder, Image, Caption } from "@telegram-apps/telegram-ui";

import FeedbackStarGIF from "@/assets/gif/feedback_star.gif"
import "./FeedbackHeader.css"

export function FeedbackHeader() {
    return (
        <div className="introducing_content__container">
            <Placeholder
                header="Отзывы сервиса"
                className='feedbacks_placeholder'
            />
            <Image
                src={FeedbackStarGIF}
                className='feedbacks_image'
                style={{
                    width: "150px",
                    height: "150px",
                }}
            />
        </div>
    );
}
