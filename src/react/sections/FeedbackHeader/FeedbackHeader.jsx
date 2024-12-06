import { useRef } from "react";

import { Placeholder } from "@telegram-apps/telegram-ui";
import Lottie from "lottie-react"

import StarAnimation from "@/assets/animations/star.json"
import "./FeedbackHeader.css"

export function FeedbackHeader() {
    const starRef = useRef(null);

    return (
        <div className="introducing_content__container">
            <Placeholder
                header="Отзывы сервиса"
                className='feedbacks_placeholder'
            />
            <Lottie
                animationData={StarAnimation}
                lottieRef={starRef}
                loop={false}
                autoplay={true}
                style={{
                    width: "150px",
                    height: "150px",
                    cursor: "pointer",
                }}
                onClick={() => {
                    starRef.current.goToAndPlay(0);
                }}
            />
        </div>
    );
}
