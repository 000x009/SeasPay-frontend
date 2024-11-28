import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Placeholder, Image } from "@telegram-apps/telegram-ui";
import WriteGIF from "@/assets/gif/write.gif";
import { usePostFeedback } from "@/scripts/hooks/usePostFeedback";
import { MainButton } from "@vkruglikov/react-telegram-web-app";

import { FeedbackForm } from "@/react/components/forms/FeedbackForm/FeedbackForm";

import "./PostFeedback.css";


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
                    src={WriteGIF}
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
