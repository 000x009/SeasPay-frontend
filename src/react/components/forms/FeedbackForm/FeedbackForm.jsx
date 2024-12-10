import { Rating } from "@mui/material";
import { Textarea } from "../../inputs/Textarea/Textarea";

import { FileSection } from "@/react/sections/FileSection/FileSection";

import "./FeedbackForm.css";


export function FeedbackForm({ form, setForm, files, setFiles }) {
    const handleRatingChange = (event, newValue) => {
        if (newValue === null || newValue === 0) {
            return;
        }
        setForm(prev => ({
            ...prev,
            rating: newValue,
        }));
    };

    const onTextChange = (event) => {
        setForm(prev => ({
            ...prev,
            text: event.target.value,
            isTextValid: true,
        }));
    };

    return (
        <>
            <div className="feedback_form">
                <div className="rating__container">
                    <Rating
                        name="rating_form"
                        defaultValue={5}
                        size="large"
                        value={form.rating}
                        className="rating_form__rating"
                        onChange={handleRatingChange}
                    />
                </div>
                <div className="feedback_text__container">
                    <Textarea
                        placeholder="Напишите что-нибудь полезное..."
                        className="feedback_form__textarea"
                        onChange={onTextChange}
                        status={form.isTextValid ? "default" : "error"}
                    />
                </div>
                <div className="feedback_form_files__container">
                    <FileSection
                        files={files}
                        setFiles={setFiles}
                        multiple={true}
                    />
                </div>
            </div>
        </>
    )
}