import { useState } from "react";

import { Rating } from "@mui/material";
import { Textarea, Cell, IconButton, Image } from "@telegram-apps/telegram-ui";

import CloseIcon from "@/assets/icons/close.svg?react"
import { FileInput } from "../../inputs/FileInput/FileInput";

import "./FeedbackForm.css";


export function FeedbackForm({ form, setForm }) {
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

    const handleFileRemove = (fileToRemove) => {
        const updatedFiles = form.files.filter((file) => file !== fileToRemove);
        setForm(prev => ({
            ...prev,
            files: updatedFiles,
        }));
    };

    const handleSetFiles = (newFiles) => {
        const updatedFiles = [...form.files, ...newFiles];
        setForm(prev => ({
            ...prev,
            files: updatedFiles,
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
                    {form.files && Array.from(form.files).map((file) => (
                        <Cell
                            key={file.name}
                            className="feedback__file_input_cell"
                            interactiveAnimation="opacity"
                            after={
                                <IconButton
                                    size="s"
                                    mode="plain"
                                    className="remove_file__button"
                                    onClick={() => handleFileRemove(file)}
                                >
                                    <CloseIcon />
                                </IconButton>
                            }
                            before={
                                <Image
                                    src={URL.createObjectURL(file)}
                                    className="feedback__file_input_image"
                                />
                            }
                        >
                            {file.name}
                        </Cell>
                    ))}
                </div>
                <div className="feedback_form_file_attachment__container">
                    <FileInput
                        label="Прикрепить фото"
                        onChange={(event) => handleSetFiles(event.target.files)}
                        className="feedback_form__file_input"
                        multiple
                        accept="image/jpeg, image/png"
                    />
                </div>
            </div>
        </>
    )
}