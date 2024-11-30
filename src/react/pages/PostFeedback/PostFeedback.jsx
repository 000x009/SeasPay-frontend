import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Placeholder, Image } from "@telegram-apps/telegram-ui";
import AngryDuck from "@/assets/gif/angry_duck.gif";
import VietnamDuck from "@/assets/gif/vietnam_duck.gif";
import LovelyDuck from "@/assets/gif/lovely_duck.gif";
import ThankfulDuck from "@/assets/gif/thankful_duck.gif";
import DepressedDuck from "@/assets/gif/depressed_duck.gif";
import { usePostFeedback } from "@/scripts/hooks/usePostFeedback";
import { MainButton } from "@vkruglikov/react-telegram-web-app";

import { FeedbackForm } from "@/react/components/forms/FeedbackForm/FeedbackForm";

import "./PostFeedback.css";


const mainImage = {
    1: VietnamDuck,
    2: AngryDuck,
    3: DepressedDuck,
    4: ThankfulDuck,
    5: LovelyDuck,
}


export function PostFeedback() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        rating: 5,
        text: '',
        isTextValid: true,
    });
    const [files, setFiles] = useState([]);
    const postFeedback = usePostFeedback();

    const handleMainButtonClick = async() => {
        if (form.text.length === 0) {
            setForm(prev => ({
                ...prev,
                isTextValid: false,
            }));
            return;
        }
        await postFeedback.handlePostFeedback(form, files);
    }

    return (
        <>
            <div className="post_feedback__container">
                <Placeholder
                    header="Оставьте самый честный отзыв о нашем сервисе!"
                    className='post_feedback__placeholder'
                />
                <Image
                    src={mainImage[form.rating]}
                    className='post_feedback__image'
                    style={{
                        width: "150px",
                        height: "150px",
                    }}
                />
            </div>
            <div className="post_feedback_form__container">
                <FeedbackForm form={form} setForm={setForm} files={files} setFiles={setFiles} />
            </div>
            <MainButton
                text="Опубликовать"
                className="post_feedback__main_button"
                onClick={handleMainButtonClick}
                progress={postFeedback.isLoading}
            />
        </>
    );
}
