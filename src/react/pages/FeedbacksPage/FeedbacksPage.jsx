import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Placeholder, Image, Caption } from "@telegram-apps/telegram-ui";

import { Divider } from "@/react/components/ui/Divider/Divider";
import { FeedbackCard } from "@/react/components/cards/FeedbackCard/FeedbackCard";
import FeedbackStarGIF from "@/assets/gif/feedback_star.gif"
import { useTelegram } from "@/scripts/hooks/useTelegram";

import "./FeedbacksPage.css"

export function FeedbacksPage() {
    const { WebApp } = useTelegram();
    const navigate = useNavigate();

    const handleMainButtonClick = () => {
        navigate("/feedbacks/post");
    }

    useEffect(() => {
        WebApp.MainButton.setParams({
            text: "Оставить отзыв",
        });
        WebApp.MainButton.show();
        WebApp.MainButton.onClick(handleMainButtonClick);

        return () => {
            WebApp.MainButton.hide();
        }
    }, []);

    return (
        <>
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
                <div className="feedbacks_description_container">
                    <Caption
                        weight="3"
                        level="3"
                        className='feedbacks_description_placeholder'
                    >
                        При нажатии на имя в правом верхнем углу, вы можете перейти в профиль пользователя, который оставил отзыв
                    </Caption>
                </div>
            </div>
            <div className="feedbacks_cards_container">
                <FeedbackCard 
                    date="2024-11-22"
                    userID={WebApp.initDataUnsafe.user.id}
                    text="Все супер!"
                    rating={5}
                    itemsLeftCount={10}
                />
            </div>
        </>
    );
}
