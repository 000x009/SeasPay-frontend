import { useState } from "react";

import { Placeholder } from "@telegram-apps/telegram-ui";
import Lottie from "lottie-react"

import AngryDuck from "@/assets/animations/angry-duck.json"
import FlashbackDuck from "@/assets/animations/duck-flashback.json"
import LovelyDuck from "@/assets/animations/lovely-duck.json"
import RespectDuck from "@/assets/animations/respect-duck.json"
import DepressedDuck from "@/assets/animations/depressed-duck.json"

import { usePostFeedback } from "@/scripts/hooks/usePostFeedback";
import { MainButton } from "@vkruglikov/react-telegram-web-app";

import { FeedbackForm } from "@/react/components/forms/FeedbackForm/FeedbackForm";

import "./PostFeedback.css";


const mainImage = {
    1: FlashbackDuck,
    2: AngryDuck,
    3: DepressedDuck,
    4: RespectDuck,
    5: LovelyDuck,
}


export function PostFeedback() {
    const [form, setForm] = useState({
        rating: 5,
        text: '',
        isTextValid: true,
    });
    const [files, setFiles] = useState([]);
    const postFeedback = usePostFeedback();

    const handleMainButtonClick = async () => {
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
                <Lottie
                    animationData={mainImage[form.rating]}
                    loop={true}
                    autoplay={true}
                    style={{
                        width: "150px",
                        height: "150px",
                    }}
                />
            </div>
            <FeedbackForm form={form} setForm={setForm} files={files} setFiles={setFiles} />
            <MainButton
                text="Опубликовать"
                className="post_feedback__main_button"
                onClick={handleMainButtonClick}
                progress={postFeedback.isLoading}
            />
        </>
    );
}
